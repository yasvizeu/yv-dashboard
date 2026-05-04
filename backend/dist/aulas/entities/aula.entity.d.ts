import { Aluno } from '../../alunos/entities/aluno.entity';
export declare enum StatusAula {
    REALIZADA = "realizada",
    NAO_REALIZADA = "nao_realizada",
    REPOSTA = "reposta"
}
export declare class Aula {
    id: number;
    aluno: Aluno;
    aluno_id: number;
    data_aula: string;
    materias: string;
    diario: string;
    status: StatusAula;
    data_reposicao: string;
    created_at: Date;
}
