import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { from, groupBy } from 'rxjs';
import { CreateProductInput } from './dto/input/create-product.input';
import { DeleteProductInput } from './dto/input/delete-product.input';
import { Products } from './model/product.model';
import { UpdateProductInput } from './dto/input/update-product.input';
import { PrismaClient } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsArgs } from './dto/args/get-products.args';
import { GetProductArgs } from './dto/args/get-product.args';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(productDto: CreateProductInput): Promise<Products> {
    return await this.prisma.product.create({ data: productDto });
  }

  async findAllProducts(): Promise<Products[]> {
    return await this.prisma.product.findMany();
    //const productsByGroup = from(products).pipe(groupBy(product=> product.categoryId))
  }

  async findOneProduct(getProductArgs: GetProductArgs): Promise<Products> {
    return await this.prisma.product.findUnique({
      where: {
        id: getProductArgs.id,
      },
    });
  }

  async findAllProductsFilter(
    getProductsArgs: GetProductsArgs,
  ): Promise<Products[]> {
    return await this.prisma.product.findMany({
      where: {
        AND: [
          { authorId: getProductsArgs.authorId },
          { categoryId: getProductsArgs.categoryId },
        ],
      },
    });
  }

  async updateProduct(
    updateProductInput: UpdateProductInput,
  ): Promise<Products> {
    return await this.prisma.product.update({
      where: { id: updateProductInput.id },
      data: {
        name: updateProductInput.name || undefined,
        description: updateProductInput.description || undefined,
        authorId: updateProductInput.authorId || undefined,
        categoryId: updateProductInput.categoryId || undefined,
        update_at: new Date(),
      },
    });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    return await this.prisma.product.update({
      where: { id: Number(id) },
      data: {
        name: updateProductDto.name || undefined,
        description: updateProductDto.description,
        authorId: updateProductDto.authorId || undefined,
        categoryId: updateProductDto.categoryId || undefined,
        update_at: new Date(),
      },
    });
  }

  async deleteProduct(
    deleteProductInput: DeleteProductInput,
  ): Promise<Products> {
    return await this.prisma.product.delete({
      where: { id: deleteProductInput.id },
    });
  }
}
