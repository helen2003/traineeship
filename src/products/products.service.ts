import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { from, groupBy } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(productDto: CreateProductDto) {
    const product = await this.prisma.product.create({ data: productDto });
    return product;
  }

  async findAllProducts() {
    const products = await this.prisma.product.findMany()
    //const productsByGroup = from(products).pipe(groupBy(product=> product.categoryId))
    return products;
  }
}
