import { MensalidadesService } from './mensalidades.service';
import { CreateMensalidadeDto, UpdateMensalidadeDto } from './dto/mensalidade.dto';
export declare class MensalidadesController {
    private readonly service;
    constructor(service: MensalidadesService);
    findAll(aluno_id?: number): Promise<import("./entities/mensalidade.entity").Mensalidade[]>;
    findOne(id: number): Promise<import("./entities/mensalidade.entity").Mensalidade>;
    create(dto: CreateMensalidadeDto): Promise<import("./entities/mensalidade.entity").Mensalidade>;
    update(id: number, dto: UpdateMensalidadeDto): Promise<import("./entities/mensalidade.entity").Mensalidade>;
    marcarPago(id: number, body: {
        forma_pagamento: string;
        data_pagamento?: string;
    }): Promise<import("./entities/mensalidade.entity").Mensalidade>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
