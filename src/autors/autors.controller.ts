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
  @ApiForbiddenResponse({description:'forbidden.'})
  @Post()
  async create(@Body() createAutorDto: CreateAutorDto) {
    const data= await this.autorsService.create(createAutorDto);
    return {message:'Autor registrado',data};
  }

  @ApiOkResponse({description:"La lista de autores fue retornada de forma correcta"})
  @ApiForbiddenResponse({description:'forbidden.'})
  @Get()
  async findAll() {
    const data = await this.autorsService.findAll();
    return data;
  }

  @ApiOkResponse({description:"El autor consultado fue retornado satisfactoriamente"})
  @ApiForbiddenResponse({description:'forbidden.'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorDto: UpdateAutorDto) {
    return this.autorsService.update(+id, updateAutorDto);
  }

  @ApiOkResponse({description:"El autor se elimino satisfactoriamente"})
  @ApiForbiddenResponse({description:'forbidden.'})
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.autorsService.remove(+id);
  }
}
