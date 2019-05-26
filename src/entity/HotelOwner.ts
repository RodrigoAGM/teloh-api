import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from "typeorm";
import {Length} from "class-validator";


@Entity()
@Unique(["username"])
export class HotelOwner{

    @PrimaryGeneratedColumn()
    idHotelOwner:number;

    @Column()
    @Length(4,50)
    username:string;

    @Column()
    @Length(4,50)
    password:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}