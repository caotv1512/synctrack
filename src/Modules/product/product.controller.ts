import { Body, Controller, Get, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  getAll( ) {
    return this.productService.findAll();
  }
  @Post('/')
  async createUsers(@Body() data: ProductDto) {
     const user = await this.productService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get('/:id')
  getOnly( @Param() id) {
    return this.productService.findOnly(id);
  }
}
