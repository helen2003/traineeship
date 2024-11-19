import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Книги', description: 'Наименование категории' })
  readonly name: string;
}
