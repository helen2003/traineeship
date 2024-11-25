import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RoleEnum } from '@prisma/client';

@ObjectType()
export class Users {
  @Field((type) => Int)
  id: number;

  @Field()
  firstName: string;

  @Field()
  name: string;

  @Field()
  role: RoleEnum;
}
