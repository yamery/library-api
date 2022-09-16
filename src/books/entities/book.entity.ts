import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autor } from '../../autors/entities/autor.entity';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({name: "titulo", type: String, nullable: false })
    titulo!: string;
    
    @Column({name: "year", type: String, nullable: false })
    year!: string;

    @Column({name: "genre", type: String, nullable: false })
    genre!: string;
        
    @Column({ name: "pages",type: Number, nullable: false })
    pages!: Number; 
    
    @ManyToOne(() => Autor, autor => autor.books,{onDelete: 'CASCADE'})
    autor: Autor;

    
}