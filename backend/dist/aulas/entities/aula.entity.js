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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = exports.StatusAula = void 0;
const typeorm_1 = require("typeorm");
const aluno_entity_1 = require("../../alunos/entities/aluno.entity");
var StatusAula;
(function (StatusAula) {
    StatusAula["REALIZADA"] = "realizada";
    StatusAula["NAO_REALIZADA"] = "nao_realizada";
    StatusAula["REPOSTA"] = "reposta";
})(StatusAula || (exports.StatusAula = StatusAula = {}));
let Aula = class Aula {
    id;
    aluno;
    aluno_id;
    data_aula;
    materias;
    diario;
    status;
    data_reposicao;
    created_at;
};
exports.Aula = Aula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aluno_entity_1.Aluno, (aluno) => aluno.aulas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'aluno_id' }),
    __metadata("design:type", aluno_entity_1.Aluno)
], Aula.prototype, "aluno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Aula.prototype, "aluno_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Aula.prototype, "data_aula", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Aula.prototype, "materias", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Aula.prototype, "diario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusAula, default: StatusAula.REALIZADA }),
    __metadata("design:type", String)
], Aula.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Aula.prototype, "data_reposicao", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Aula.prototype, "created_at", void 0);
exports.Aula = Aula = __decorate([
    (0, typeorm_1.Entity)('aulas')
], Aula);
//# sourceMappingURL=aula.entity.js.map