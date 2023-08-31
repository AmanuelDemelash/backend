import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  
  @Field()
  title:string
  @Field()
  description:string

  @Field(type => Int, { nullable: true,defaultValue:0})
  likes?: number;

  @Field(type=>Float,{nullable:false,defaultValue:0.0})
  price:number

  @Field(type=>Int)
  shopids:number
}
