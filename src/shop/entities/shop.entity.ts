import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type } from 'os';
import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn ,Column, OneToMany} from 'typeorm';

@Entity()
@ObjectType()
export class Shop {
 
  @PrimaryGeneratedColumn()
  @Field(type=>Int)
  id:number

  @Column()
  @Field()
  name:string

  @Column()
  @Field()
  phone:string

  @OneToMany(()=>Product,products=>products.shop)
  @Field(type=>[Product],{nullable:true})
  products:Product[]
}
