import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Aula } from '../../aulas/entities/aula.entity';
import { Mensalidade } from '../../mensalidades/entities/mensalidade.entity';

export enum NivelIngles {
  INICIANTE = 'iniciante',
  INTERMEDIARIO = 'intermediario',
  AVANCADO = 'avancado',
}

export enum StatusAluno {
  ATIVO = 'ativo',
  PAUSADO = 'pausado',
  CANCELADO = 'cancelado',
}

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nome: string;

  @Column({ nullable: true })
  idade: number;

  @Column({ length: 50, nullable: true })
  contato: string;

  @Column({ type: 'enum', enum: NivelIngles })
  nivel: NivelIngles;

  @Column({ length: 100, nullable: true })
  plano: string;

  @Column({ type: 'text', nullable: true })
  objetivo: string;

  @Column({ length: 100, nullable: true })
  dias_aula: string;

  @Column({ length: 200, nullable: true })
  como_chegou: string;

  @Column({ type: 'date', nullable: true })
  data_inicio: string;

  @Column({ type: 'enum', enum: StatusAluno, default: StatusAluno.ATIVO })
  status: StatusAluno;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  // Mensalidade fixa
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  mensalidade_valor: number;

  @Column({ nullable: true })
  mensalidade_dia_vencimento: number; // dia do mês, ex: 10

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Aula, (aula) => aula.aluno)
  aulas: Aula[];

  @OneToMany(() => Mensalidade, (m) => m.aluno)
  mensalidades: Mensalidade[];
}
