import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Autor } from '../autors/entities/autor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Book,Autor])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
