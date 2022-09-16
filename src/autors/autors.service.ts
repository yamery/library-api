import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutorsService {

  constructor( @InjectRepository(Autor)
  private readonly autorRepository: Repository<Autor>,){}

  async create(createAutorDto: CreateAutorDto) {  
    const userExist = await this.autorRepository.findOneBy({name:createAutorDto.name});
    if (userExist)
      throw new BadRequestException('El autor ya existe');
        
    const newAutor = this.autorRepository.create(createAutorDto);
    const autor = await this.autorRepository.save(newAutor);   
    
    return autor;
  }

  async findAll(): Promise<Autor[]> {
    return await this.autorRepository.find();
  }

  async findOne(id: number) {
    const userExist = await this.autorRepository.findOneBy({id:id});
    if (!userExist)
      throw new BadRequestException('No se encontro un autor con el id:'+id);
    
    const autor = await this.autorRepository.find({where:{id:id},relations:['books']});
    return autor;
  }


  async remove(id: number) {
    const userExist = await this.autorRepository.findOneBy({id:id});
    if (!userExist)
      throw new BadRequestException('No se encontro un autor con el id:'+id);


    return await this.autorRepository.delete(id);
  }
}
