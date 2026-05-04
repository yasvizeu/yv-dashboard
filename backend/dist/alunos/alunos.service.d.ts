import { Repository } from 'typeorm';
import { Aluno } from './entities/aluno.entity';
import { Mensalidade } from '../mensalidades/entities/mensalidade.entity';
import { CreateAlunoDto, UpdateAlunoDto } from './dto/aluno.dto';
export declare class AlunosService {
    private readonly repo;
    private readonly mensRepo;
    constructor(repo: Repository<Aluno>, mensRepo: Repository<Mensalidade>);
    findAll(): Promise<Aluno[]>;
    findOne(id: number): Promise<Aluno>;
    create(dto: CreateAlunoDto): Promise<Aluno>;
    update(id: number, dto: UpdateAlunoDto): Promise<Aluno>;
    remove(id: number): Promise<{
        message: string;
    }>;
    gerarMensalidadesMes(alunoId: number, ano: number, mes: number): Promise<Mensalidade | {
        message: string;
    }>;
    private _gerarMensalidadeMesAtual;
}
