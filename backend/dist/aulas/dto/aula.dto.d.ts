import { StatusAula } from '../entities/aula.entity';
export declare class CreateAulaDto {
    aluno_id: number;
    data_aula: string;
    materias?: string;
    diario?: string;
    status?: StatusAula;
    data_reposicao?: string;
}
export declare class UpdateAulaDto extends CreateAulaDto {
}
export declare class FilterAulaDto {
    aluno_id?: number;
    data_inicio?: string;
    data_fim?: string;
}
