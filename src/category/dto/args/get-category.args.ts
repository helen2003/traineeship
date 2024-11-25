import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CategoryEnum } from '../enum/category.enum';

@ArgsType()
export class GetCategoryArgs {
  @Field((type) => CategoryEnum)
  name: CategoryEnum;
}
