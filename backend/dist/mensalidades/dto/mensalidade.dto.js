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
exports.UpdateMensalidadeDto = exports.CreateMensalidadeDto = void 0;
const class_validator_1 = require("class-validator");
const mensalidade_entity_1 = require("../entities/mensalidade.entity");
class CreateMensalidadeDto {
    aluno_id;
    mes_referencia;
    valor;
    vencimento;
    pago;
    data_pagamento;
    forma_pagamento;
    observacoes;
}
exports.CreateMensalidadeDto = CreateMensalidadeDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateMensalidadeDto.prototype, "aluno_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateMensalidadeDto.prototype, "mes_referencia", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateMensalidadeDto.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateMensalidadeDto.prototype, "vencimento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateMensalidadeDto.prototype, "pago", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateMensalidadeDto.prototype, "data_pagamento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(mensalidade_entity_1.FormaPagamento),
    __metadata("design:type", String)
], CreateMensalidadeDto.prototype, "forma_pagamento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMensalidadeDto.prototype, "observacoes", void 0);
class UpdateMensalidadeDto extends CreateMensalidadeDto {
}
exports.UpdateMensalidadeDto = UpdateMensalidadeDto;
//# sourceMappingURL=mensalidade.dto.js.map