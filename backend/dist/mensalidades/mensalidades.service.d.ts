import { Repository } from 'typeorm';
import { Mensalidade } from './entities/mensalidade.entity';
import { CreateMensalidadeDto, UpdateMensalidadeDto } from './dto/mensalidade.dto';
export declare class MensalidadesService {
    private readonly repo;
    constructor(repo: Repository<Mensalidade>);
    findAll(aluno_id?: number): Promise<Mensalidade[]>;
    findOne(id: number): Promise<Mensalidade>;
    create(dto: CreateMensalidadeDto): Promise<Mensalidade>;
    update(id: number, dto: UpdateMensalidadeDto): Promise<Mensalidade>;
    marcarPago(id: number, forma_pagamento: string, data_pagamento?: string): Promise<Mensalidade>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
