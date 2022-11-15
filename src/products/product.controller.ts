import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductsService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async GetAll(): Promise<ProductEntity[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  async GetOne(@Param('id', ParseIntPipe) id: number): Promise<ProductEntity> {
    return this.productsService.getById(id);
  }
}
