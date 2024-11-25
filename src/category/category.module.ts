import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CategoryResolver } from './category.resolver';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService, CategoryResolver],
  exports: [CategoryService]
})
export class CategoryModule {}
