import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensalidade } from './entities/mensalidade.entity';
import { MensalidadesService } from './mensalidades.service';
import { MensalidadesController } from './mensalidades.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mensalidade])],
  controllers: [MensalidadesController],
  providers: [MensalidadesService],
})
export class MensalidadesModule {}
