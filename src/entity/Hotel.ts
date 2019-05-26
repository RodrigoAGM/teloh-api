import {
    Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique,
    UpdateDateColumn
} from "typeorm";
import {HotelOwner} from "./HotelOwner";
import {Length} from "class-validator";
import {Photo} from "./Photo";
import {Product} from "./Product";
import {Room} from "./Room";

@Entity()
@Unique(["address"])
export class Hotel{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @Length(50)
    address:string;

    @Column()
    @Length(15)
    phone:string;

    @Column()
    @Length(150)
    description:string;

    @Column({nullable:true})
    @Length(45)
    email:string;

    @Column({width: 5, type:"decimal"})
    rate:number;

    @Column()
    @Length(45)
    name:string;

    @ManyToOne(type => HotelOwner, hotelOwner => hotelOwner.hotels)
    hotelOwner:HotelOwner;

    @OneToMany(type => Photo, photo => photo.hotel)
    photos:Photo[];

    @OneToMany(type => Product, product => product.hotel)
    products:Product[];

    @OneToMany(type => Room, room=>room.hotel)
    rooms:Room[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}