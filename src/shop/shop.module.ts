import { Module, forwardRef } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopResolver } from './shop.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports:[TypeOrmModule.forFeature([Shop]),forwardRef(()=>ProductModule)],
  providers: [ShopResolver, ShopService],
  exports:[ShopService]
})
export class ShopModule {}
