import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto, UpdateAlunoDto } from './dto/aluno.dto';

@UseGuards(JwtAuthGuard)
@Controller('alunos')
export class AlunosController {
  constructor(private readonly service: AlunosService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateAlunoDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAlunoDto) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.service.remove(id); }

  // POST /api/alunos/:id/gerar-mensalidade?ano=2026&mes=5
  @Post(':id/gerar-mensalidade')
  gerarMensalidade(
    @Param('id', ParseIntPipe) id: number,
    @Query('ano') ano: number,
    @Query('mes') mes: number,
  ) {
    const agora = new Date();
    return this.service.gerarMensalidadesMes(
      id,
      Number(ano) || agora.getFullYear(),
      Number(mes) || agora.getMonth() + 1,
    );
  }
}
