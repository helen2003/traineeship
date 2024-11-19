import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Product } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Создание товара' })
  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @ApiOperation({ summary: 'Получение всех товаров' })
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAllProducts();
  }

  @ApiOperation({ summary: 'Обновление товара' })
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }
}
