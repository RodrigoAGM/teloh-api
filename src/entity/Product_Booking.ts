import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./User";
import {Product} from "./Product";
import {Booking} from "./Booking";

@Entity()
export class Product_Booking{

    @PrimaryColumn()
    id:number;

    @PrimaryColumn()
    idProduct:number;

    @Column({type:"int"})
    quantity:number;

    @OneToOne(type => Booking)
    @JoinColumn()
    booking:Booking;

    @OneToOne(type => Product)
    @JoinColumn()
    product:Product;
}