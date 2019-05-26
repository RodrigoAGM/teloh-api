import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn} from "typeorm";
import {IsNotEmpty, Length} from "class-validator";
import * as bcrypt from "bcryptjs";


@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn()
    idUser: number;

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

    @Column()
    age: number;

    @Column({nullable:true})
    @Length(2, 50)
    firstName: string;

    @Column({nullable:true})
    @Length(2, 50)
    lastName: string;

    @Column()
    bookingEnabled: boolean;

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
