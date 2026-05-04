import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Aluno } from '../../alunos/entities/aluno.entity';

export enum FormaPagamento {
  PIX = 'pix',
  TRANSFERENCIA = 'transferencia',
  DINHEIRO = 'dinheiro',
  CARTAO = 'cartao',
  OUTRO = 'outro',
}

@Entity('mensalidades')
export class Mensalidade {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Aluno, (aluno) => aluno.mensalidades, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;

  @Column()
  aluno_id: number;

  @Column({ type: 'date' })
  mes_referencia: string; // primeiro dia do mês

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valor: number;

  @Column({ type: 'date' })
  vencimento: string;

  @Column({ default: false })
  pago: boolean;

  @Column({ type: 'date', nullable: true })
  data_pagamento: string;

  @Column({ type: 'enum', enum: FormaPagamento, nullable: true })
  forma_pagamento: FormaPagamento;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @CreateDateColumn()
  created_at: Date;
}
