"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aluno_entity_1 = require("./entities/aluno.entity");
const mensalidade_entity_1 = require("../mensalidades/entities/mensalidade.entity");
let AlunosService = class AlunosService {
    repo;
    mensRepo;
    constructor(repo, mensRepo) {
        this.repo = repo;
        this.mensRepo = mensRepo;
    }
    findAll() {
        return this.repo.find({ order: { nome: 'ASC' } });
    }
    async findOne(id) {
        const aluno = await this.repo.findOne({ where: { id }, relations: ['aulas', 'mensalidades'] });
        if (!aluno)
            throw new common_1.NotFoundException(`Aluno #${id} não encontrado`);
        return aluno;
    }
    async create(dto) {
        const aluno = this.repo.create(dto);
        const saved = await this.repo.save(aluno);
        if (dto.mensalidade_valor && dto.mensalidade_dia_vencimento) {
            await this._gerarMensalidadeMesAtual(saved);
        }
        return saved;
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.repo.delete(id);
        return { message: 'Aluno removido com sucesso' };
    }
    async gerarMensalidadesMes(alunoId, ano, mes) {
        const aluno = await this.findOne(alunoId);
        if (!aluno.mensalidade_valor || !aluno.mensalidade_dia_vencimento) {
            return { message: 'Aluno sem mensalidade fixa configurada' };
        }
        const mesRef = `${ano}-${String(mes).padStart(2, '0')}-01`;
        const dia = String(aluno.mensalidade_dia_vencimento).padStart(2, '0');
        const venc = `${ano}-${String(mes).padStart(2, '0')}-${dia}`;
        const existe = await this.mensRepo.findOne({
            where: { aluno_id: alunoId, mes_referencia: mesRef },
        });
        if (existe)
            return { message: 'Mensalidade já existe para este mês' };
        const m = this.mensRepo.create({
            aluno_id: alunoId,
            mes_referencia: mesRef,
            valor: aluno.mensalidade_valor,
            vencimento: venc,
            pago: false,
        });
        return this.mensRepo.save(m);
    }
    async _gerarMensalidadeMesAtual(aluno) {
        const agora = new Date();
        return this.gerarMensalidadesMes(aluno.id, agora.getFullYear(), agora.getMonth() + 1);
    }
};
exports.AlunosService = AlunosService;
exports.AlunosService = AlunosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aluno_entity_1.Aluno)),
    __param(1, (0, typeorm_1.InjectRepository)(mensalidade_entity_1.Mensalidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AlunosService);
//# sourceMappingURL=alunos.service.js.map