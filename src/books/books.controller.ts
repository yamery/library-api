import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ShowBookDto } from './dto/show-book.dto';
@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiCreatedResponse({description:'El libro fue creado exitosamente'})
  @ApiForbiddenResponse({description:'Solicitud no resuelta'})
  @Post()
  async create(@Body() createBookDto: CreateBookDto) { 
    const data = await this.booksService.create(createBookDto); 
    let res:ShowBookDto={
      titulo:data.titulo,
      year:data.year,
      genre:data.genre,
      pages:data.pages,
      nameAutor:data.autor.name
    }; 
    return res;
  }

  @ApiOkResponse({description:"La lista de libros fue retornada de forma correcta"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta'})
  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @ApiOkResponse({description:"El libro consultado fue retornado satisfactoriamente"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta.'})
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


  @ApiOkResponse({description:"El libro se elimino satisfactoriamente"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta.'})
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.booksService.remove(+id);
  }

  @ApiOkResponse({description:"Los libros del autor se eliminaron satisfactoriamente"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta.'})
  @Delete('autor/:id')
  async removeByAutor(@Param('id') id: string) {
    return await this.booksService.removeByAutor(+id);
  }
}
