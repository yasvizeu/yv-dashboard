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
exports.FilterAulaDto = exports.UpdateAulaDto = exports.CreateAulaDto = void 0;
const class_validator_1 = require("class-validator");
const aula_entity_1 = require("../entities/aula.entity");
class CreateAulaDto {
    aluno_id;
    data_aula;
    materias;
    diario;
    status;
    data_reposicao;
}
exports.CreateAulaDto = CreateAulaDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAulaDto.prototype, "aluno_id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAulaDto.prototype, "data_aula", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAulaDto.prototype, "materias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAulaDto.prototype, "diario", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(aula_entity_1.StatusAula),
    __metadata("design:type", String)
], CreateAulaDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateAulaDto.prototype, "data_reposicao", void 0);
class UpdateAulaDto extends CreateAulaDto {
}
exports.UpdateAulaDto = UpdateAulaDto;
class FilterAulaDto {
    aluno_id;
    data_inicio;
    data_fim;
}
exports.FilterAulaDto = FilterAulaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FilterAulaDto.prototype, "aluno_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterAulaDto.prototype, "data_inicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterAulaDto.prototype, "data_fim", void 0);
//# sourceMappingURL=aula.dto.js.map