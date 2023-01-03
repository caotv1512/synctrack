import { Module } from "@nestjs/common";
import {SupertestService } from "./supertest.service";
import {SupertestController } from "./supertest.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
  ],
  controllers: [SupertestController],
  providers: [SupertestService],
  exports: [SupertestService],
})
export class SupertestModule {}
