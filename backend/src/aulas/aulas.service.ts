import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { Aula } from './entities/aula.entity';
import { CreateAulaDto, UpdateAulaDto, FilterAulaDto } from './dto/aula.dto';

@Injectable()
export class AulasService {
  constructor(
    @InjectRepository(Aula)
    private readonly repo: Repository<Aula>,
  ) {}

  findAll(filter: FilterAulaDto) {
    const where: FindOptionsWhere<Aula> = {};

    if (filter.aluno_id) {
      where.aluno_id = Number(filter.aluno_id);
    }

    if (filter.data_inicio && filter.data_fim) {
      where.data_aula = Between(filter.data_inicio, filter.data_fim) as any;
    }

    return this.repo.find({
      where,
      relations: ['aluno'],
      order: { data_aula: 'DESC' },
    });
  }

  async findOne(id: number) {
    const aula = await this.repo.findOne({ where: { id }, relations: ['aluno'] });
    if (!aula) throw new NotFoundException(`Aula #${id} não encontrada`);
    return aula;
  }

  create(dto: CreateAulaDto) {
    const aula = this.repo.create(dto);
    return this.repo.save(aula);
  }

  async update(id: number, dto: UpdateAulaDto) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
    return { message: 'Aula removida com sucesso' };
  }
}
