import { Book } from "src/books/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn({name: "id"})
    id?: number;  
    
    @Column({name: "name", type: String, nullable: false })
    name!: string;
    
    @Column({name: "dateOfBirth", type: String, nullable: false })
    dateOfBirth!: string;

    @Column({name: "city", type: String, nullable: false })
    city!: string;

    @Column({name: "email", type: String, nullable: false })
    email!: string;

    @OneToMany(() => Book, book => book.autor,{
        cascade: true,
    })
    books?: Book[];


}
