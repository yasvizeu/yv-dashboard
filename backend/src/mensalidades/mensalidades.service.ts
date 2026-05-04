import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensalidade } from './entities/mensalidade.entity';
import { CreateMensalidadeDto, UpdateMensalidadeDto } from './dto/mensalidade.dto';

@Injectable()
export class MensalidadesService {
  constructor(
    @InjectRepository(Mensalidade)
    private readonly repo: Repository<Mensalidade>,
  ) {}

  findAll(aluno_id?: number) {
    const where = aluno_id ? { aluno_id: Number(aluno_id) } : {};
    return this.repo.find({ where, relations: ['aluno'], order: { mes_referencia: 'DESC' } });
  }

  async findOne(id: number) {
    const m = await this.repo.findOne({ where: { id }, relations: ['aluno'] });
    if (!m) throw new NotFoundException(`Mensalidade #${id} não encontrada`);
    return m;
  }

  create(dto: CreateMensalidadeDto) {
    const m = this.repo.create(dto);
    return this.repo.save(m);
  }

  async update(id: number, dto: UpdateMensalidadeDto) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async marcarPago(id: number, forma_pagamento: string, data_pagamento?: string) {
    await this.findOne(id);
    await this.repo.update(id, {
      pago: true,
      forma_pagamento: forma_pagamento as any,
      data_pagamento: data_pagamento ?? new Date().toISOString().split('T')[0],
    });
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
    return { message: 'Mensalidade removida com sucesso' };
  }
}
