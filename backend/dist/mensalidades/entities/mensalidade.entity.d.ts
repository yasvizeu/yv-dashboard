import { Aluno } from '../../alunos/entities/aluno.entity';
export declare enum FormaPagamento {
    PIX = "pix",
    TRANSFERENCIA = "transferencia",
    DINHEIRO = "dinheiro",
    CARTAO = "cartao",
    OUTRO = "outro"
}
export declare class Mensalidade {
    id: number;
    aluno: Aluno;
    aluno_id: number;
    mes_referencia: string;
    valor: number;
    vencimento: string;
    pago: boolean;
    data_pagamento: string;
    forma_pagamento: FormaPagamento;
    observacoes: string;
    created_at: Date;
}
