import { registerEnumType } from '@nestjs/graphql';

export enum CategoryEnum {
  BOOK,
  OTHER
}

registerEnumType(CategoryEnum, {
  name: 'CategoryEnum',
});
