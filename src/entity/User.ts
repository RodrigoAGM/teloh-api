import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from "typeorm";
import {IsNotEmpty, Length} from "class-validator";
import * as bcrypt from "bcryptjs";
import {Booking} from "./Booking";
import {Comment} from "./Comment";


@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 50)
    username: string;

    @Column()
    @Length(4, 45)
    password: string;

    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @Length(6, 45)
    email: string;

    @Column({type:"int"})
    age: number;

    @Column({nullable:true, length:50})
    firstName: string;

    @Column({nullable:true, length:50})
    lastName: string;

    @Column()
    bookingEnabled: boolean;

    @OneToMany(type => Booking, booking => booking.user)
    bookings:Booking[];

    @OneToMany(type => Comment, comments => comments.user)
    comments: Comment[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}
