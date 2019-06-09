import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from "typeorm";
import {Length} from "class-validator";
import {Hotel} from "./Hotel";


@Entity()
@Unique(["username"])
export class HotelOwner{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Length(4,50)
    username:string;

    @Column()
    @Length(4,50)
    password:string;

    @OneToMany(type => Hotel, hotel => hotel.hotelOwner)
    hotels:Hotel[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}