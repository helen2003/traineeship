import { ArgsType, Field, Int } from '@nestjs/graphql';
import { RolesEnum } from '../enum/roles.enum';

@ArgsType()
export class GetUsersRoleArgs {
  @Field((type) => RolesEnum)
  role: RolesEnum;
}
