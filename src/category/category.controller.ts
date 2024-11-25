import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { CategoryEntity } from './dto/entities/categotyCreateEntity.entity';
import { Category } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Создание категории' })
  @Post()
  create(@Body() categoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(categoryDto);
  }

  @ApiOperation({ summary: 'Получение всех категорий товаров' })
  @ApiCreatedResponse({ type: CategoryEntity, isArray: true })
  // @UseGuards(JwtAuthGuard)
  // @Roles('USER', 'SELLER')
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAllCategory();
  }
}
