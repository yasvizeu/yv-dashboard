import { Repository } from 'typeorm';
import { Aula } from './entities/aula.entity';
import { CreateAulaDto, UpdateAulaDto, FilterAulaDto } from './dto/aula.dto';
export declare class AulasService {
    private readonly repo;
    constructor(repo: Repository<Aula>);
    findAll(filter: FilterAulaDto): Promise<Aula[]>;
    findOne(id: number): Promise<Aula>;
    create(dto: CreateAulaDto): Promise<Aula>;
    update(id: number, dto: UpdateAulaDto): Promise<Aula>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
