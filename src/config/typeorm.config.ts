import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';

const port: number = parseInt(<string>process.env.PORT) || 3306;

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: port,
  username: 'junior_task',
  password: 'test',
  database: 'junior_task',
  entities: [Product],
  synchronize: true,
  timezone: 'utc',
};
