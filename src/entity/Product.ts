import {
    Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Hotel} from "./Hotel";
import {Length} from "class-validator";
import {Photo} from "./Photo";

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    idProduct:number;

    @Column()
    @Length(2,50)
    name:string;

    @Column()
    @Length(3,150)
    description:string;

    @Column({type:"decimal"})
    price:number;

    @Column()
    @Length(15,150)
    imgUrl:string;

    @Column({type:"int"})
    stock:number;

    @ManyToOne(type => Hotel, hotel => hotel.products)
    hotel:Hotel;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}