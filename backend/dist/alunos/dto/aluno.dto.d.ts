import { NivelIngles, StatusAluno } from '../entities/aluno.entity';
export declare class CreateAlunoDto {
    nome: string;
    idade?: number;
    contato?: string;
    nivel: NivelIngles;
    plano?: string;
    objetivo?: string;
    dias_aula?: string;
    como_chegou?: string;
    data_inicio?: string;
    status?: StatusAluno;
    observacoes?: string;
    mensalidade_valor?: number;
    mensalidade_dia_vencimento?: number;
}
export declare class UpdateAlunoDto extends CreateAlunoDto {
}
