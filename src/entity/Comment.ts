import {Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./User";
import {Room} from "./Room";
import {Length} from "class-validator";

export class Comment{

    @PrimaryGeneratedColumn()
    idComment:number;

    @Column()
    @Length(5,150)
    description:string;

    @Column({type:"datetime"})
    published:string;

    @ManyToOne(type => User, user=>user.comments)
    user:User;

    @ManyToOne(type => Room, room => room.comments)
    room:Room;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}