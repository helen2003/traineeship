import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from '@prisma/client';

@ObjectType()
export class Products implements Product {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  created_at: Date;

  @Field({ nullable: true })
  update_at: Date;

  @Field({ nullable: true })
  delete_at: Date;

  @Field((type) => Int)
  categoryId: number;

  @Field((type) => Int)
  authorId: number;
}
