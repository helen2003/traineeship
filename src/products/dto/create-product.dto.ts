import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Портрет Дориана Грея',
    description: 'Наименование товара',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example:
      'Портрет Дориана Грея — самое знаменитое произведение Оскара Уайльда',
    description: 'Описание товара',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({ example: '1', description: 'Идентификатор автора товара' })
  @IsNumber()
  readonly authorId: number;

  @ApiProperty({ example: '1', description: 'Идентификатор категории товара' })
  @IsNumber()
  readonly categoryId: number;
}
