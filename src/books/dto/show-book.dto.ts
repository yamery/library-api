import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class ShowBookDto{
    
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
        type:Number,
        description:'Paginas del libro',
        default:''
    })    
    @IsNotEmpty()
    @IsInt()
    pages: Number;

    @ApiProperty({
        type:String,
        description:'Nombre del autor del libro',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    @IsString()
    nameAutor: string;
}
