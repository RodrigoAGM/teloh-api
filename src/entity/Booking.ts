import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./Product";
import {Length} from "class-validator";
import {User} from "./User";
import {userInfo} from "os";
import {BookPeriod} from "./BookPeriod";

@Entity()
export class Booking{

    @PrimaryGeneratedColumn()
    idBooking:number;

    @Column()
    @Length(5,50)
    code:string;

    @Column()
    active:boolean;

    @ManyToMany(type => Product)
    @JoinTable({name:"Product_Booking"})
    products:Product[];

    @ManyToOne(type => User, user => user.bookings)
    user:User;

    @ManyToOne(type => BookPeriod, bookPeriod => bookPeriod.bookings)
    bookPeriod:BookPeriod;
}