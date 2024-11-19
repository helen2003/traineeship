import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Products } from './model/product.model';
import { ProductsService } from './products.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CreateProductInput } from './dto/input/create-product.input';
import { DeleteProductInput } from './dto/input/delete-product.input';
import { UpdateProductInput } from './dto/input/update-product.input';
import { GetProductsArgs } from './dto/args/get-products.args';
import { GetProductArgs } from './dto/args/get-product.args';
import { ResultUnion } from './dto/object/category-product.object';
import { CategoryService } from 'src/category/category.service';

@Resolver(() => Products)
export class ProductsResolver {
  constructor(private productsService: ProductsService, private categoryService: CategoryService) {}


  // @Query(() => [ResultUnion])
  // search(): Promise<Array<typeof ResultUnion>> {
  //   return [this.productsService.findAllProducts(), this.categoryService.findAllCategory()];
  // }

  @Query(() => [Products], { name: 'products', nullable: 'items' })
  getProducts(): Promise<Products[]> {
    return this.productsService.findAllProducts();
  }

  @Query(() => Products, {name: 'product'})
  getProduct(@Args() getProductArgs: GetProductArgs): Promise<Products> {
    return this.productsService.findOneProduct(getProductArgs);
  }

  @Query(() => [Products], {name: 'productsFilter'})
  getProductsFilter(
    @Args() getProductsArgs: GetProductsArgs,
  ): Promise<Products[]> {
    return this.productsService.findAllProductsFilter(getProductsArgs);
  }

  @Mutation(() => Products)
  createProduct(
    @Args('createProductData') createProductInput: CreateProductInput,
  ): Promise<Products> {
    return this.productsService.createProduct(createProductInput);
  }

  @Mutation(() => Products)
  updateProduct(
    @Args('updateProductData') updateProductInput: UpdateProductInput,
  ): Promise<Products> {
    return this.productsService.updateProduct(updateProductInput);
  }

  @Mutation(() => Products)
  deleteProduct(
    @Args('deleteProductData') deleteProductInput: DeleteProductInput,
  ): Promise<Products> {
    return this.productsService.deleteProduct(deleteProductInput);
  }
}
