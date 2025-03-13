import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get the current authenticated user' })
  @ApiResponse({
    status: 200,
    description: 'User data retrieved successfully',
    type: UserDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Token missing or invalid' })
  getMe(@GetUser() user: User) {
    console.log('e')
    return user;
  }

  @Patch()
  @ApiOperation({ summary: 'Update the current user’s profile' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: UserDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid input' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Token missing or invalid' })
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}