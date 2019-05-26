import {
    Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Hotel} from "./Hotel";
import {Length} from "class-validator";
import {Photo} from "./Photo";
import {Product_Booking} from "./Product_Booking";

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id:number;

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

    @ManyToOne(() => Hotel, hotel => hotel.products)
    hotel:Hotel;

    @OneToMany(()=>Product_Booking, pb => pb.product)
    bookingConnection:Product_Booking[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}