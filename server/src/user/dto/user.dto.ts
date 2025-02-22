import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: 'The date and time the user was created',
    example: '2025-02-22T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time the user was last updated',
    example: '2025-02-22T12:00:00Z',
  })
  updatedAt: Date;
}