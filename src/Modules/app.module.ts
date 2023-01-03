import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupertestModule } from './supertest/supertest.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), SupertestModule, ProductModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
