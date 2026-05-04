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
exports.Mensalidade = exports.FormaPagamento = void 0;
const typeorm_1 = require("typeorm");
const aluno_entity_1 = require("../../alunos/entities/aluno.entity");
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["PIX"] = "pix";
    FormaPagamento["TRANSFERENCIA"] = "transferencia";
    FormaPagamento["DINHEIRO"] = "dinheiro";
    FormaPagamento["CARTAO"] = "cartao";
    FormaPagamento["OUTRO"] = "outro";
})(FormaPagamento || (exports.FormaPagamento = FormaPagamento = {}));
let Mensalidade = class Mensalidade {
    id;
    aluno;
    aluno_id;
    mes_referencia;
    valor;
    vencimento;
    pago;
    data_pagamento;
    forma_pagamento;
    observacoes;
    created_at;
};
exports.Mensalidade = Mensalidade;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Mensalidade.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aluno_entity_1.Aluno, (aluno) => aluno.mensalidades, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'aluno_id' }),
    __metadata("design:type", aluno_entity_1.Aluno)
], Mensalidade.prototype, "aluno", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Mensalidade.prototype, "aluno_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Mensalidade.prototype, "mes_referencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Mensalidade.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Mensalidade.prototype, "vencimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Mensalidade.prototype, "pago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Mensalidade.prototype, "data_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: FormaPagamento, nullable: true }),
    __metadata("design:type", String)
], Mensalidade.prototype, "forma_pagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Mensalidade.prototype, "observacoes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Mensalidade.prototype, "created_at", void 0);
exports.Mensalidade = Mensalidade = __decorate([
    (0, typeorm_1.Entity)('mensalidades')
], Mensalidade);
//# sourceMappingURL=mensalidade.entity.js.map