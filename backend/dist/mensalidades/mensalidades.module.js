"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensalidadesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mensalidade_entity_1 = require("./entities/mensalidade.entity");
const mensalidades_service_1 = require("./mensalidades.service");
const mensalidades_controller_1 = require("./mensalidades.controller");
let MensalidadesModule = class MensalidadesModule {
};
exports.MensalidadesModule = MensalidadesModule;
exports.MensalidadesModule = MensalidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([mensalidade_entity_1.Mensalidade])],
        controllers: [mensalidades_controller_1.MensalidadesController],
        providers: [mensalidades_service_1.MensalidadesService],
    })
], MensalidadesModule);
//# sourceMappingURL=mensalidades.module.js.map