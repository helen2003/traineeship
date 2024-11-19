import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Products } from 'src/products/model/product.model';

@ArgsType()
export class GetProductsArgs {
  @Field((type) => Int, { nullable: true })
  authorId: number;

  @Field((type) => Int, { nullable: true })
  categoryId: number;
}
