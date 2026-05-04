import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, password: string) {
    const validUser = process.env.ADMIN_USER ?? 'yas';
    const validHash = process.env.ADMIN_PASS_HASH ?? '';

    if (username !== validUser) throw new UnauthorizedException('Credenciais inválidas');

    // Suporte a senha em texto puro no .env (apenas para setup inicial)
    const plainPass = process.env.ADMIN_PASS ?? '';
    const valid = validHash
      ? await bcrypt.compare(password, validHash)
      : password === plainPass;

    if (!valid) throw new UnauthorizedException('Credenciais inválidas');

    const token = this.jwtService.sign({ sub: username, username });
    return { access_token: token };
  }
}
