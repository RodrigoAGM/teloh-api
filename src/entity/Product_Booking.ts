import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./User";
import {Product} from "./Product";

@Entity()
export class Product_Booking{

    @PrimaryColumn()
    idBooking:number;

    @PrimaryColumn()
    idProduct:number;

    @Column({type:"int"})
    quantity:number;

    @OneToOne(type => User)
    @JoinColumn()
    user:User;

    @OneToOne(type => Product)
    @JoinColumn()
    product:Product;
}