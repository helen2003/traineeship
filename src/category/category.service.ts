import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {

    constructor (private prisma: PrismaService){}

    async createCategory(categoryDto: CreateCategoryDto){
        return this.prisma.category.create({data: categoryDto})
    }

    async findAllCategory(){
        const categories = await this.prisma.category.findMany()
        return categories
    }

}
