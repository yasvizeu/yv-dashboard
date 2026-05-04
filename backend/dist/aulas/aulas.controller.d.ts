import { AulasService } from './aulas.service';
import { CreateAulaDto, UpdateAulaDto, FilterAulaDto } from './dto/aula.dto';
export declare class AulasController {
    private readonly service;
    constructor(service: AulasService);
    findAll(filter: FilterAulaDto): Promise<import("./entities/aula.entity").Aula[]>;
    findOne(id: number): Promise<import("./entities/aula.entity").Aula>;
    create(dto: CreateAulaDto): Promise<import("./entities/aula.entity").Aula>;
    update(id: number, dto: UpdateAulaDto): Promise<import("./entities/aula.entity").Aula>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
