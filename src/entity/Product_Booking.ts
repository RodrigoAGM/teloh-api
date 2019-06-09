import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "./User";
import {Product} from "./Product";
import {Booking} from "./Booking";

@Entity()
export class Product_Booking{

    @PrimaryColumn()
    bookingId:number;

    @PrimaryColumn()
    productId:number;

    @Column({type:"int"})
    quantity:number;

    @ManyToOne(() => Booking, booking => booking.productConnection, {primary:true})
    @JoinColumn({name:"bookingId"})
    booking:Booking;

    @ManyToOne(() => Product, product => product.bookingConnection, {primary:true})
    @JoinColumn({name:"productId"})
    product:Product;
}