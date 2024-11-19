import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(categoryDto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({ data: categoryDto });
  }

  async findAllCategory(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }
}
