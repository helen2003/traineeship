import { createUnionType } from "@nestjs/graphql";
import { Category } from "src/category/model/category.model";
import { Products } from "src/products/model/product.model";

export const ResultUnion = createUnionType({
    name: 'CategotyProductUnion',
    types: () => [Category, Products] as const,
  });