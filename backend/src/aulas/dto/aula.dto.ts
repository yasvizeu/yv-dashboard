import { IsInt, IsOptional, IsEnum, IsDateString, IsString } from 'class-validator';
import { StatusAula } from '../entities/aula.entity';

export class CreateAulaDto {
  @IsInt()
  aluno_id: number;

  @IsDateString()
  data_aula: string;

  @IsOptional()
  @IsString()
  materias?: string;

  @IsOptional()
  @IsString()
  diario?: string;

  @IsOptional()
  @IsEnum(StatusAula)
  status?: StatusAula;

  @IsOptional()
  @IsDateString()
  data_reposicao?: string;
}

export class UpdateAulaDto extends CreateAulaDto {}

export class FilterAulaDto {
  @IsOptional()
  aluno_id?: number;

  @IsOptional()
  data_inicio?: string;

  @IsOptional()
  data_fim?: string;
}
