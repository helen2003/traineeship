import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma.service';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { SoftDeleteMiddleware } from './middleware/softDelete.middleware';
//@nestjs/config

@Module({
  providers: [PrismaService, ],
  imports: [UsersModule, ProductsModule, CategoryModule, AuthModule],
  exports: [PrismaService],
  controllers: [],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(SoftDeleteMiddleware)
//       .forRoutes('products');
//   }
// }
