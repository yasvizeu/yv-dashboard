import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Aluno } from '../../alunos/entities/aluno.entity';

export enum StatusAula {
  REALIZADA = 'realizada',
  NAO_REALIZADA = 'nao_realizada',
  REPOSTA = 'reposta',
}

@Entity('aulas')
export class Aula {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Aluno, (aluno) => aluno.aulas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;

  @Column()
  aluno_id: number;

  @Column({ type: 'date' })
  data_aula: string;

  @Column({ type: 'text', nullable: true })
  materias: string;

  @Column({ type: 'text', nullable: true })
  diario: string; // resumo da aula

  @Column({ type: 'enum', enum: StatusAula, default: StatusAula.REALIZADA })
  status: StatusAula;

  @Column({ type: 'date', nullable: true })
  data_reposicao: string;

  @CreateDateColumn()
  created_at: Date;
}
