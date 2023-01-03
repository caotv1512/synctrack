import { Body, Controller, Get, Param, Query } from "@nestjs/common";
import { SupertestService } from "./supertest.service";

@Controller("supertest")
export class SupertestController {
  constructor(private readonly supertestService: SupertestService) {}

  @Get('/')
  getDataAWS( @Query() query) {
    return this.supertestService.getDataAWS(query);
  }
}
