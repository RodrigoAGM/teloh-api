import {Hotel} from "./Hotel";
import {
    Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Length} from "class-validator";

@Entity()
export class Photo{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Length(15,150)
    url:string;

    @Column({nullable:true, length:150})
    description:string;

    @ManyToOne(type => Hotel, hotel => hotel.photos)
    hotel:Hotel;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}