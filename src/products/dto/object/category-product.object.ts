import { createUnionType } from "@nestjs/graphql";
import { Category } from "src/category/model/category.model";
import { Products } from "src/products/model/product.model";

export const ResultUnion = createUnionType({
    name: 'ResultUnion',
    types: () => [Category, Products] as const,
    resolveType: value => {
      if ("name" in value) {
        return Category;
      }
      if ("description" in value) {
        return Products;
      }
      return undefined;
    },
  }); 