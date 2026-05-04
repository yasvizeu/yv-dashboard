import { FormaPagamento } from '../entities/mensalidade.entity';
export declare class CreateMensalidadeDto {
    aluno_id: number;
    mes_referencia: string;
    valor: number;
    vencimento: string;
    pago?: boolean;
    data_pagamento?: string;
    forma_pagamento?: FormaPagamento;
    observacoes?: string;
}
export declare class UpdateMensalidadeDto extends CreateMensalidadeDto {
}
