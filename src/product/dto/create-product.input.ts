import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  
  @Field()
  title:string
  @Field()
  description:string

  @Field(type => Int, { nullable: true,defaultValue:0})
  likes?: number;

  @Field(type=>Int)
  shopids:number
}
