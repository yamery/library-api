import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAutorDto {
    @ApiProperty({
        type:String,
        description:'Nombre completo del autor',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type:String,
        description:'Fecha de nacimiento del autor',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    dateOfBirth: string;

    @ApiProperty({
        type:String,
        description:'Ciudad de procedencia del autor',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({
        type:String,
        description:'Correo del autor',
        default:''
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string; 
    
}
