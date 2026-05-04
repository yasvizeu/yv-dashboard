import { IsInt, IsOptional, IsEnum, IsDateString, IsBoolean, IsNumber } from 'class-validator';
import { FormaPagamento } from '../entities/mensalidade.entity';

export class CreateMensalidadeDto {
  @IsInt()
  aluno_id: number;

  @IsDateString()
  mes_referencia: string;

  @IsNumber()
  valor: number;

  @IsDateString()
  vencimento: string;

  @IsOptional()
  @IsBoolean()
  pago?: boolean;

  @IsOptional()
  @IsDateString()
  data_pagamento?: string;

  @IsOptional()
  @IsEnum(FormaPagamento)
  forma_pagamento?: FormaPagamento;

  @IsOptional()
  observacoes?: string;
}

export class UpdateMensalidadeDto extends CreateMensalidadeDto {}
