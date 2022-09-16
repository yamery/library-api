import { Module } from '@nestjs/common';
import { AutorsService } from './autors.service';
import { AutorsController } from './autors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Autor])],
  controllers: [AutorsController],
  providers: [AutorsService]
})
export class AutorsModule {}
