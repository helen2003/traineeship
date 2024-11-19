import { Field, InputType, Int } from '@nestjs/graphql';
import { Product } from '@prisma/client';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field((type) => Int)
  authorId: number;

  @Field((type) => Int)
  categoryId: number;
}
