import { Controller, Get, Post, Put, Delete, Param, Body, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AulasService } from './aulas.service';
import { CreateAulaDto, UpdateAulaDto, FilterAulaDto } from './dto/aula.dto';

@UseGuards(JwtAuthGuard)
@Controller('aulas')
export class AulasController {
  constructor(private readonly service: AulasService) {}

  @Get()
  findAll(@Query() filter: FilterAulaDto) { return this.service.findAll(filter); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateAulaDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAulaDto) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }
}
