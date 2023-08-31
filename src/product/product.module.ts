import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ShopModule } from 'src/shop/shop.module';

@Module({
  imports:[TypeOrmModule.forFeature([Product]),ShopModule],
  providers: [ProductResolver, ProductService],
  exports:[ProductService]
})
export class ProductModule {}
