import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AutorsService } from './autors.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@ApiTags('autors')
@Controller('autors')
export class AutorsController {
  constructor(private readonly autorsService: AutorsService) {}

  @ApiCreatedResponse({description:'El Autor fue creado exitosamente'})
  @ApiForbiddenResponse({description:'Solicitud no resuelta.'})
  @Post()
  async create(@Body() createAutorDto: CreateAutorDto) {
    const data= await this.autorsService.create(createAutorDto);
    return {message:'Autor registrado',data};
  }

  @ApiOkResponse({description:"La lista de autores fue retornada de forma correcta"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta'})
  @Get()
  async findAll() {
    const data = await this.autorsService.findAll();
    return data;
  }

  @ApiOkResponse({description:"El autor consultado fue retornado satisfactoriamente"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta.'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorsService.findOne(+id);
  }



  @ApiOkResponse({description:"El autor se elimino satisfactoriamente"})
  @ApiForbiddenResponse({description:'Solicitud no resuelta.'})
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.autorsService.remove(+id);
  }
}
