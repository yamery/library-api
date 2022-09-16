import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ShowBookDto } from './dto/show-book.dto';
@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {    
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bookExist = await this.booksService.findOne(+id);
    let res:ShowBookDto={
      titulo:bookExist.titulo,
      year:bookExist.year,
      genre:bookExist.genre,
      pages:bookExist.pages,
      nameAutor:bookExist.autor.name
    };
    return res;
  }



  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.booksService.remove(+id);
  }

  @Delete('autor/:id')
  async removeByAutor(@Param('id') id: string) {
    return await this.booksService.removeByAutor(+id);
  }
}
