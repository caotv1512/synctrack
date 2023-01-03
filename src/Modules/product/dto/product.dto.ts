import { IsNumber, IsString, IsNotEmpty, IsUrl } from "class-validator";
import { Product } from "../database/product.entity";

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
