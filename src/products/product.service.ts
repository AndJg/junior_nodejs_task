import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create_product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  //Get Product List
  async getAll() {
    return await this.productRepository.find();
  }

  //Get Product Details
  async getById(id: number) {
    return await this.productRepository.findOne({ where: { id: id } });
  }

  //Create New Product
  async create(product: CreateProductDto): Promise<ProductEntity> {
    const createdProduct = this.productRepository.create(product);
    return await this.productRepository.save(createdProduct);
  }

  //Update product by id

  async update(id: number, product: UpdateProductDto): Promise<ProductEntity> {
    let foundProduct = await this.productRepository.findOneBy({
      id: id,
    });

    if (!foundProduct) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    foundProduct = { ...foundProduct, ...product, updatedAt: new Date() };
    return await this.productRepository.save(foundProduct);
  }

  //Delete product

  async delete(id: number): Promise<number> {
    const foundProduct = await this.productRepository.findOneBy({
      id: id,
    });

    if (!foundProduct) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    await this.productRepository.delete(id);
    return foundProduct.id;
  }
}
