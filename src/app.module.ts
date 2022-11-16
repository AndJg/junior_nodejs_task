import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/typeorm.config';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConnectionConfig), ProductsModule],
})
export class AppModule {}
