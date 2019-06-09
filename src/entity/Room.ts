import {
    Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Hotel} from "./Hotel";
import {Length} from "class-validator";
import {BookPeriod} from "./BookPeriod";
import {Comment} from "./Comment";

@Entity()
export class Room{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Length(5,150)
    description:string;

    @Column()
    @Length(5,50)
    name:string;

    @Column()
    smoking:boolean;

    @Column({type:"int"})
    available:number;

    @ManyToOne(type => Hotel, hotel => hotel.rooms)
    hotel:Hotel;

    @OneToMany(type => BookPeriod, bookPeriod => bookPeriod.room)
    bookPeriods: BookPeriod[];

    @OneToMany(type => Comment, comment => comment.room)
    comments: Comment[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}