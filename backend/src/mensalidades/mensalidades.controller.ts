import { Controller, Get, Post, Put, Patch, Delete, Param, Body, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MensalidadesService } from './mensalidades.service';
import { CreateMensalidadeDto, UpdateMensalidadeDto } from './dto/mensalidade.dto';

@UseGuards(JwtAuthGuard)
@Controller('mensalidades')
export class MensalidadesController {
  constructor(private readonly service: MensalidadesService) {}

  @Get()
  findAll(@Query('aluno_id') aluno_id?: number) { return this.service.findAll(aluno_id); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateMensalidadeDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMensalidadeDto) { return this.service.update(id, dto); }

  @Patch(':id/pagar')
  marcarPago(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { forma_pagamento: string; data_pagamento?: string },
  ) { return this.service.marcarPago(id, body.forma_pagamento, body.data_pagamento); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
