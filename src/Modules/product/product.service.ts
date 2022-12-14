import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Timestamp } from 'typeorm';
import { Product } from './database/product.entity';
import { ProductDto } from './dto/product.dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(data: ProductDto) {
    const product = this.productRepo.create(data);
    await this.productRepo.save(product);
    return product;
  }

  async findAll() {
    const data = await this.productRepo.find();
    console.log(data);
    return data;
  }

  async findOnly(id) {
    const product = await this.productRepo.findOne({ where: { id: id } });
    if (!product) {
      throw new NotFoundException('Id not found.');
    }
    try {
      return product;
    } catch (err) {
      throw new BadRequestException({ action: 'find product data' });
    }
  }

  async update(id) {
    const product = await this.productRepo.findOne({ where: { id: id } });
    if (!product) {
      throw new NotFoundException('Id not found.');
    }
    try {
      return product;
    } catch (err) {
      throw new BadRequestException({ action: 'find product data' });
    }
  }
}
