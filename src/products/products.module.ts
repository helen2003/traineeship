import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma.service';
import { SoftDeleteMiddleware } from 'src/common/middleware/softDelete.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
// export class ProductsModule {}
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SoftDeleteMiddleware)
      .forRoutes('products');
  }
}
