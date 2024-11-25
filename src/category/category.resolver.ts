import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from 'src/category/category.service';
import { Category } from './model/category.model';
import { GetCategoryArgs } from './dto/args/get-category.args';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}


  @Query(() => Category, {name: 'category'})
  getCategory(@Args() getcategoryArgs: GetCategoryArgs) {
    return this.categoryService.findOneCategory(getcategoryArgs)
  }
}
