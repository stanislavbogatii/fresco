import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { SignInDto, SignUpDto } from './dto';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: UserDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid input' })
  signup(@Body() dto: SignUpDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({ summary: 'Sign in an existing user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully signed in',
    type: UserDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid credentials' })
  async signin(@Body() dto: SignInDto, @Res() res: Response) {
    const { access_token } = await this.authService.signin(dto);
    res.setHeader('Set-Cookie', `access_token=${access_token}; Path=/; HttpOnly; Max-Age=315360000`)
    res.status(200).json({ success: true });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('signout')
  @ApiOperation({ summary: 'Sign out' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'User successfully signed in',
  })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized - Invalid credentials' })
  async signout(@Res() res: Response) {
    res.setHeader('Set-Cookie', 'access_token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
    res.status(HttpStatus.NO_CONTENT).json({ success: true, message: 'Logged out' });
  }
}