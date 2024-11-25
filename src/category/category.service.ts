import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from '@prisma/client';
import { GetProductArgs } from 'src/products/dto/args/get-product.args';
import { GetCategoryArgs } from './dto/args/get-category.args';
import { CategoryEnum } from './dto/enum/category.enum';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(categoryDto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({ data: categoryDto });
  }

  async findAllCategory(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  async findOneCategory(getCategoryArgs: GetCategoryArgs) {
    console.log(CategoryEnum[getCategoryArgs.name])
    // return await this.prisma.category.findUnique({
    //   where: {
    //     name: category,
    //   },
    // });
  }

}
