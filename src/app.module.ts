import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import{TypeOrmModule} from "@nestjs/typeorm";
import { AppService } from './app.service';
import { AutorsModule } from './autors/autors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "oracle",
      "host": "localhost",
      "port": 1521,
      "username": "librero",
      "password": "adminlibrary",
      "sid": "xe",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),AutorsModule, BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
