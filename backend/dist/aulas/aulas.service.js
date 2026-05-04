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
exports.AulasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aula_entity_1 = require("./entities/aula.entity");
let AulasService = class AulasService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(filter) {
        const where = {};
        if (filter.aluno_id) {
            where.aluno_id = Number(filter.aluno_id);
        }
        if (filter.data_inicio && filter.data_fim) {
            where.data_aula = (0, typeorm_2.Between)(filter.data_inicio, filter.data_fim);
        }
        return this.repo.find({
            where,
            relations: ['aluno'],
            order: { data_aula: 'DESC' },
        });
    }
    async findOne(id) {
        const aula = await this.repo.findOne({ where: { id }, relations: ['aluno'] });
        if (!aula)
            throw new common_1.NotFoundException(`Aula #${id} não encontrada`);
        return aula;
    }
    create(dto) {
        const aula = this.repo.create(dto);
        return this.repo.save(aula);
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.repo.delete(id);
        return { message: 'Aula removida com sucesso' };
    }
};
exports.AulasService = AulasService;
exports.AulasService = AulasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(aula_entity_1.Aula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AulasService);
//# sourceMappingURL=aulas.service.js.map