import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create_product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { Product } from './product.entity';
import { ProductsService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async GetAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  async GetOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
  async create(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.productsService.delete(id);
  }
}
