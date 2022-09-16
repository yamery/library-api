import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from 'src/autors/entities/autor.entity';
import { Repository } from 'typeorm';

import { CreateBookDto } from './dto/create-book.dto';
import { ShowBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {

  constructor(@InjectRepository(Book)
  private bookRepository: Repository<Book>,@InjectRepository(Autor)
  private readonly autorRepository: Repository<Autor>){}

  async create(createBookDto: CreateBookDto) {

    
    const autorExist = await this.autorRepository.findOneBy({id:parseInt(createBookDto.autorID,10)});
    if (!autorExist)
      throw new BadRequestException('El autor no está registrado');
    
    if(autorExist.books)
      if(autorExist.books.length>10)
        throw new BadRequestException('No es posible registrar el libro, se alcanzó el máximo permitido.');
    
    const newBook =await this.bookRepository.create(createBookDto);    
    newBook.autor=autorExist;
    const book =await this.bookRepository.save(newBook);
    return book;
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: ShowBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  async removeByAutor(id: number) {
    const books = await this.bookRepository.find({where:{autor:{id:id}},relations:['autor']});
    if (books.length===0) {
      throw new NotFoundException(`No se encontro ningun libro del autor de id:`+id);
    }
    console.log(books);
    return this.bookRepository.remove(books);
  
  }

}