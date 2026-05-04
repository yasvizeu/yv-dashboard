import { AlunosService } from './alunos.service';
import { CreateAlunoDto, UpdateAlunoDto } from './dto/aluno.dto';
export declare class AlunosController {
    private readonly service;
    constructor(service: AlunosService);
    findAll(): Promise<import("./entities/aluno.entity").Aluno[]>;
    findOne(id: number): Promise<import("./entities/aluno.entity").Aluno>;
    create(dto: CreateAlunoDto): Promise<import("./entities/aluno.entity").Aluno>;
    update(id: number, dto: UpdateAlunoDto): Promise<import("./entities/aluno.entity").Aluno>;
    remove(id: number): Promise<{
        message: string;
    }>;
    gerarMensalidade(id: number, ano: number, mes: number): Promise<import("../mensalidades/entities/mensalidade.entity").Mensalidade | {
        message: string;
    }>;
}
