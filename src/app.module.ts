import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConnectionConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConnectionConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
