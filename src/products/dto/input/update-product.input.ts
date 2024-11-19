import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field((type) => Int, { nullable: true })
  authorId: number;

  @Field((type) => Int, { nullable: true })
  categoryId: number;
}
