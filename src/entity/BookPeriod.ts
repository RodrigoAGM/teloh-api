import {Room} from "./Room";
import {Column, CreateDateColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Length} from "class-validator";
import {Booking} from "./Booking";

export class BookPeriod{

    @PrimaryGeneratedColumn()
    idBookPeriod:number;

    @Column({type:"int", width:24})
    duration:number;

    @Column({nullable:true})
    @Length(5,45)
    description:string;

    @Column({type:"decimal"})
    price:number;

    @ManyToOne(type => Room, room => room.bookPeriods)
    room:Room;

    @OneToMany(type => Booking, booking => booking.bookPeriod)
    bookings:Booking[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}