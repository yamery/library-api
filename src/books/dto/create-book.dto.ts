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
    @IsString()
    titulo: string;

    @ApiProperty({
        type:String,
        description:'Año publicacion del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    @IsString()
    year: string;

    @ApiProperty({
        type:String,
        description:'Genero literario del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    @IsString()
    genre: string;

    @ApiProperty({
        type:String,
        description:'Paginas del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    @IsString()
    pages: string;

    @ApiProperty({
        type:String,
        description:'Identificador del autor del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    @IsString()
    autorID: string;
 



    
}
