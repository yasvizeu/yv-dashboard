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
exports.MensalidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const mensalidade_entity_1 = require("./entities/mensalidade.entity");
let MensalidadesService = class MensalidadesService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(aluno_id) {
        const where = aluno_id ? { aluno_id: Number(aluno_id) } : {};
        return this.repo.find({ where, relations: ['aluno'], order: { mes_referencia: 'DESC' } });
    }
    async findOne(id) {
        const m = await this.repo.findOne({ where: { id }, relations: ['aluno'] });
        if (!m)
            throw new common_1.NotFoundException(`Mensalidade #${id} não encontrada`);
        return m;
    }
    create(dto) {
        const m = this.repo.create(dto);
        return this.repo.save(m);
    }
    async update(id, dto) {
        await this.findOne(id);
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
    async marcarPago(id, forma_pagamento, data_pagamento) {
        await this.findOne(id);
        await this.repo.update(id, {
            pago: true,
            forma_pagamento: forma_pagamento,
            data_pagamento: data_pagamento ?? new Date().toISOString().split('T')[0],
        });
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.repo.delete(id);
        return { message: 'Mensalidade removida com sucesso' };
    }
};
exports.MensalidadesService = MensalidadesService;
exports.MensalidadesService = MensalidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mensalidade_entity_1.Mensalidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MensalidadesService);
//# sourceMappingURL=mensalidades.service.js.map