import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from './model/users.model';
import { UsersService } from './users.service';
import { GetUsersRoleArgs } from './dto/args/get-users-by-roles.args';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private usersService: UsersService) {}


  @Query(() => Users, {name: 'UsersByRoles'})
  getUsers(@Args() getRolesArgs: GetUsersRoleArgs): Promise<Users[]> {
    return this.usersService.findAllUsers(getRolesArgs)
  }
}
