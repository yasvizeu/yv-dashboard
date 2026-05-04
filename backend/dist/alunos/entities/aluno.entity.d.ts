import { Aula } from '../../aulas/entities/aula.entity';
import { Mensalidade } from '../../mensalidades/entities/mensalidade.entity';
export declare enum NivelIngles {
    INICIANTE = "iniciante",
    INTERMEDIARIO = "intermediario",
    AVANCADO = "avancado"
}
export declare enum StatusAluno {
    ATIVO = "ativo",
    PAUSADO = "pausado",
    CANCELADO = "cancelado"
}
export declare class Aluno {
    id: number;
    nome: string;
    idade: number;
    contato: string;
    nivel: NivelIngles;
    plano: string;
    objetivo: string;
    dias_aula: string;
    como_chegou: string;
    data_inicio: string;
    status: StatusAluno;
    observacoes: string;
    mensalidade_valor: number;
    mensalidade_dia_vencimento: number;
    created_at: Date;
    aulas: Aula[];
    mensalidades: Mensalidade[];
}
