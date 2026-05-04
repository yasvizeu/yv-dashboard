import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './entities/aluno.entity';
import { Mensalidade } from '../mensalidades/entities/mensalidade.entity';
import { CreateAlunoDto, UpdateAlunoDto } from './dto/aluno.dto';

@Injectable()
export class AlunosService {
  constructor(
    @InjectRepository(Aluno)
    private readonly repo: Repository<Aluno>,
    @InjectRepository(Mensalidade)
    private readonly mensRepo: Repository<Mensalidade>,
  ) {}

  findAll() {
    return this.repo.find({ order: { nome: 'ASC' } });
  }

  async findOne(id: number) {
    const aluno = await this.repo.findOne({ where: { id }, relations: ['aulas', 'mensalidades'] });
    if (!aluno) throw new NotFoundException(`Aluno #${id} não encontrado`);
    return aluno;
  }

  async create(dto: CreateAlunoDto) {
    const aluno = this.repo.create(dto);
    const saved = await this.repo.save(aluno);

    // Gera mensalidade do mês atual automaticamente se tiver valor definido
    if (dto.mensalidade_valor && dto.mensalidade_dia_vencimento) {
      await this._gerarMensalidadeMesAtual(saved);
    }

    return saved;
  }

  async update(id: number, dto: UpdateAlunoDto) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
    return { message: 'Aluno removido com sucesso' };
  }

  async gerarMensalidadesMes(alunoId: number, ano: number, mes: number) {
    const aluno = await this.findOne(alunoId);
    if (!aluno.mensalidade_valor || !aluno.mensalidade_dia_vencimento) {
      return { message: 'Aluno sem mensalidade fixa configurada' };
    }

    const mesRef = `${ano}-${String(mes).padStart(2, '0')}-01`;
    const dia = String(aluno.mensalidade_dia_vencimento).padStart(2, '0');
    const venc = `${ano}-${String(mes).padStart(2, '0')}-${dia}`;

    // Evita duplicar
    const existe = await this.mensRepo.findOne({
      where: { aluno_id: alunoId, mes_referencia: mesRef },
    });
    if (existe) return { message: 'Mensalidade já existe para este mês' };

    const m = this.mensRepo.create({
      aluno_id: alunoId,
      mes_referencia: mesRef,
      valor: aluno.mensalidade_valor,
      vencimento: venc,
      pago: false,
    });
    return this.mensRepo.save(m);
  }

  private async _gerarMensalidadeMesAtual(aluno: Aluno) {
    const agora = new Date();
    return this.gerarMensalidadesMes(aluno.id, agora.getFullYear(), agora.getMonth() + 1);
  }
}
