import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Shop } from 'src/shop/entities/shop.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {

  @PrimaryGeneratedColumn()
  @Field(type=>Int)
  id:number;
  
  @Column()
  @Field()
  title:string;

  @Column()
  @Field()
  description:string;

  @Column()
  @Field(type => Int, { nullable: true, defaultValue:0})
  likes?: number;

  @Column()
  @Field(type=>Int,{nullable:false,defaultValue:0})
  shopids:number

  @ManyToOne(()=>Shop,shop=>shop.products)
  @Field(type=>Shop,{nullable:true})
  shop:Shop;
}
