import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const TableName = 'product';

@Entity(TableName)
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column('')
  image: string;

  @Column()
  price: string;

  @Column()
  description: string;
}
