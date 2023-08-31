import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { ShopService } from 'src/shop/shop.service';
import { Shop } from 'src/shop/entities/shop.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private usersRepository: Repository<Product>, private shopService:ShopService
  ) {}
  
  create(createProductInput: CreateProductInput) {
    const newproduct=this.usersRepository.create(createProductInput);
    return this.usersRepository.save(newproduct);
  }

  findAll():Promise<Product[]> {
    return this.usersRepository.find();
  }

  findOne(id: number):Promise<Product>{
    return this.usersRepository.findOneBy({id});
  }

 async update(id: number, updateProductInput: UpdateProductInput){
  const updatedProduct=await this.usersRepository.update(id,updateProductInput);

  //  return updateProductInput;
  return updateProductInput;
  }

 async remove(id: number):Promise<Product>{
    const data=await this.usersRepository.findOneBy({id:id});
    this.usersRepository.remove(data);

     return data;
  }

  getshop(shopid:number):Promise<Shop>{
    return this.shopService.findOne(shopid);
  }

  getproducts(id:number):Promise<Product[]>{
   return this.usersRepository.find({where:{id}})
  }
}
