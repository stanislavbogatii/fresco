import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum } from '@prisma/client';

export class EditUserDto {
  @ApiProperty({
    description: 'The first name for the user account',
    example: 'Vladik',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'The last name for the user account',
    example: 'Tracenco',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'The phone number for the user account',
    example: '+373232323',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'The gender for the user account',
    example: GenderEnum.male,
    enum: GenderEnum
  })
  @IsEnum(GenderEnum)
  @IsOptional()
  gender?: GenderEnum;
}