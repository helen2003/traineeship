import { category } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryEntity implements category {
  @ApiProperty()
  idCategory: number;

  @ApiProperty()
  nameCategory: string;
}