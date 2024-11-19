import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductsResolver } from './product.resolver';
import { CategoryModule } from 'src/category/category.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, ProductsResolver],
  imports: [CategoryModule]
})
export class ProductsModule {}