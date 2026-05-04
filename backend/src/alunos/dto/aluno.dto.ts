import { IsString, IsOptional, IsInt, IsEnum, IsDateString, Min, Max, IsNumber } from 'class-validator';
import { NivelIngles, StatusAluno } from '../entities/aluno.entity';

export class CreateAlunoDto {
  @IsString()
  nome: string;

  @IsOptional() @IsInt() @Min(1) @Max(120)
  idade?: number;

  @IsOptional() @IsString()
  contato?: string;

  @IsEnum(NivelIngles)
  nivel: NivelIngles;

  @IsOptional() @IsString()
  plano?: string;

  @IsOptional() @IsString()
  objetivo?: string;

  @IsOptional() @IsString()
  dias_aula?: string;

  @IsOptional() @IsString()
  como_chegou?: string;

  @IsOptional() @IsDateString()
  data_inicio?: string;

  @IsOptional() @IsEnum(StatusAluno)
  status?: StatusAluno;

  @IsOptional() @IsString()
  observacoes?: string;

  @IsOptional() @IsNumber()
  mensalidade_valor?: number;

  @IsOptional() @IsInt() @Min(1) @Max(31)
  mensalidade_dia_vencimento?: number;
}

export class UpdateAlunoDto extends CreateAlunoDto {}
