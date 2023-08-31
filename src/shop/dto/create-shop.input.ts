import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateShopInput {
  
  @Field()
  name:string

  @Field()
  phone:string
}
