import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Length} from "class-validator";
import {User} from "./User";
import {BookPeriod} from "./BookPeriod";
import {Product_Booking} from "./Product_Booking";

@Entity()
export class Booking{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Length(5,50)
    code:string;

    @Column()
    active:boolean;

    @OneToMany(()=>Product_Booking, pb => pb.booking)
    productConnection:Product_Booking[];

    @ManyToOne(type => User, user => user.bookings)
    user:User;

    @ManyToOne(type => BookPeriod, bookPeriod => bookPeriod.bookings)
    bookPeriod:BookPeriod;
}