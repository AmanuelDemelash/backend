import { Injectable } from '@nestjs/common';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { Shop } from './entities/shop.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class ShopService {
constructor(@InjectRepository(Shop) private shopRepository:Repository<Shop>,private readonly ProductServic:ProductService){}

  create(createShopInput: CreateShopInput) {
     try{
      const newshop=this.shopRepository.create(createShopInput);
      return this.shopRepository.save(newshop);
     }catch(err){
       return err
     }
  }
  findAll():Promise<Shop[]>{
    return this.shopRepository.find();
  }
  findOne(id: number):Promise<Shop>{
    return this.shopRepository.findOneBy({id});
  }

  update(id: number, updateShopInput: UpdateShopInput) {
    this.shopRepository.update(id,updateShopInput);
    return updateShopInput;
  }

  remove(id: number){
    try{
      this.shopRepository
      return this.shopRepository.findOneBy({id});
    }catch(err){
      return err
    }
    
  }

  getproducts(id:number){
    return this.ProductServic.findAll()
  }
}
