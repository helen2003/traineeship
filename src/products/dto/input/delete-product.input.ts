import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteProductInput {
  @Field((type) => Int)
  id: number;
}
