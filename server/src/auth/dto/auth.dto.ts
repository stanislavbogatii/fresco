import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GenderEnum } from '@prisma/client';

export class SignUpDto {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password for the user account',
    example: 'strongPassword123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

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

  @ApiProperty({
    description: 'The company name for the user account',
    example: "Company name",
  })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({
    description: 'The company commercial name for the user account',
    example: "Company commercial name",
  })
  @IsString()
  @IsNotEmpty()
  companyCommercialName: string;

  @ApiProperty({
    description: 'The company fiscal code for the user account',
    example: "Company fiscal code",
  })
  @IsString()
  @IsNotEmpty()
  companyFiscalCode: string;

  @ApiProperty({
    description: 'The company phone for the user account',
    example: "+373923823",
  })
  @IsString()
  @IsNotEmpty()
  companyPhone: string;
}

export class SignInDto {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password for the user account',
    example: 'strongPassword123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}