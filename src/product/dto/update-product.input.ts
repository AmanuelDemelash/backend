import { Shop } from 'src/shop/entities/shop.entity';
import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;

  @Field()
  title:string
  @Field()
  description:string
  @Field(type=>Float,{nullable:false,defaultValue:0.0})
  price:number
}
