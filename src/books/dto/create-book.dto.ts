import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {

    @ApiProperty({
        type:String,
        description:'Titulo del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()   
    titulo: string;

    @ApiProperty({
        type:String,
        description:'Año publicacion del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()    
    year: string;

    @ApiProperty({
        type:String,
        description:'Genero literario del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()    
    genre: string;

    @ApiProperty({
        type:String,
        description:'Paginas del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()    
    pages: string;

    @ApiProperty({
        type:String,
        description:'Identificador del autor del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    autorID: string;
 



    
}
