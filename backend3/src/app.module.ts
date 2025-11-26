import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://asaddevo211_db_user:iyIk7GrBvjdW4yDF@cluster0.u8ocxoh.mongodb.net/?appName=Cluster0"),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
