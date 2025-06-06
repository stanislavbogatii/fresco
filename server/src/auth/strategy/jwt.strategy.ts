import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) { 
  constructor( 
    config: ConfigService,  
    private prisma: PrismaService,
  ) {
    super({ 
      jwtFromRequest:
      ExtractJwt.fromExtractors([
        (req) => { 
          return req?.cookies?.access_token || null;
        },
      ]),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: {
    sub: number;
    email: string;
  }) {
    const user =
      await this.prisma.user.findUnique({
        where: {
          id: payload.sub,
        },
        include: {
          profile: true,
          company: true
        }
      });
    delete user.hash;
    return user;
  }
}