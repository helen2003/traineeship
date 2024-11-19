import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ChangeRoleDto {
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  @IsNumber()
  readonly userId: number;

  @ApiProperty({
    type: 'string',
    example: 'USER',
    description: 'Роль пользователя',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly role: any;
}
