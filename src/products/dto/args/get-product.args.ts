import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Products } from 'src/products/model/product.model';

@ArgsType()
export class GetProductArgs {
  @Field((type) => Int)
  id: number;
}
