import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProductImagesModule } from './product-images/product-images.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { ProductImage } from './product-images/entities/product-image.entity';

@Module({
  imports: [
    NinjasModule,
    UsersModule, 
    ProductsModule, 
    ProductImagesModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-test',
      entities: [Product, ProductImage],
      synchronize: true, // Auto-migration (for development only)
    }),
    TypeOrmModule.forFeature([Product, ProductImage]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
