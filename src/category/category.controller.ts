import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiCreatedResponse, ApiOperation, ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CategoryEntity } from './entities/categotyCreateEntity.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({summary: 'Создание категории'})
  @Post()
  create(@Body() categoryDto: CreateCategoryDto){
    return this.categoryService.createCategory(categoryDto)
  }

  @ApiOperation({summary: 'Получение всех категорий товаров'})
  @ApiCreatedResponse({ type: CategoryEntity, isArray: true })
  // @UseGuards(JwtAuthGuard)
  // @Roles('USER', 'SELLER')
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get()
  findAll(){
    return this.categoryService.findAllCategory()
  }
}
