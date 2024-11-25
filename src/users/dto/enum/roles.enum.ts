import { registerEnumType } from '@nestjs/graphql';

export enum RolesEnum {
  USER,
  SELLER,
  ADMIN
}

registerEnumType(RolesEnum, {
  name: 'RolesEnum',
});
