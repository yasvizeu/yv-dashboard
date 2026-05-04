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
exports.Aluno = exports.StatusAluno = exports.NivelIngles = void 0;
const typeorm_1 = require("typeorm");
const aula_entity_1 = require("../../aulas/entities/aula.entity");
const mensalidade_entity_1 = require("../../mensalidades/entities/mensalidade.entity");
var NivelIngles;
(function (NivelIngles) {
    NivelIngles["INICIANTE"] = "iniciante";
    NivelIngles["INTERMEDIARIO"] = "intermediario";
    NivelIngles["AVANCADO"] = "avancado";
})(NivelIngles || (exports.NivelIngles = NivelIngles = {}));
var StatusAluno;
(function (StatusAluno) {
    StatusAluno["ATIVO"] = "ativo";
    StatusAluno["PAUSADO"] = "pausado";
    StatusAluno["CANCELADO"] = "cancelado";
})(StatusAluno || (exports.StatusAluno = StatusAluno = {}));
let Aluno = class Aluno {
    id;
    nome;
    idade;
    contato;
    nivel;
    plano;
    objetivo;
    dias_aula;
    como_chegou;
    data_inicio;
    status;
    observacoes;
    mensalidade_valor;
    mensalidade_dia_vencimento;
    created_at;
    aulas;
    mensalidades;
};
exports.Aluno = Aluno;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aluno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150 }),
    __metadata("design:type", String)
], Aluno.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Aluno.prototype, "idade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "contato", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NivelIngles }),
    __metadata("design:type", String)
], Aluno.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "plano", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "objetivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "dias_aula", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200, nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "como_chegou", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "data_inicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusAluno, default: StatusAluno.ATIVO }),
    __metadata("design:type", String)
], Aluno.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Aluno.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Aluno.prototype, "mensalidade_valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Aluno.prototype, "mensalidade_dia_vencimento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Aluno.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => aula_entity_1.Aula, (aula) => aula.aluno),
    __metadata("design:type", Array)
], Aluno.prototype, "aulas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mensalidade_entity_1.Mensalidade, (m) => m.aluno),
    __metadata("design:type", Array)
], Aluno.prototype, "mensalidades", void 0);
exports.Aluno = Aluno = __decorate([
    (0, typeorm_1.Entity)('alunos')
], Aluno);
//# sourceMappingURL=aluno.entity.js.map