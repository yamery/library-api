import { PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class ShowBookDto extends PartialType(CreateBookDto) {
    
}
