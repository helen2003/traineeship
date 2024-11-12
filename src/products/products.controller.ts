import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({summary: 'Создание товара'})
  @Post()
  create(@Body() createProductDto: CreateProductDto){
    return this.productsService.createProduct(createProductDto)
  }

  // @ApiOperation({summary: 'Получение всех товаров по категориям'})
  @ApiOperation({summary: 'Получение всех товаров'})
  @Get()
  findAll(){
    return this.productsService.findAllProducts()
  }
}
