import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Length} from "class-validator";

@Entity()
export class Hotel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(5, 20)
    name: string;

    @Column()
    @Length(5, 100)
    address: string;

    @Column()
    @Length(8, 12)
    phone: string;

    @Column()
    @Length(5, 350)
    description: string;

    @Column()
    @Length(5, 70)
    email: string;

    @Column()
    rate: number;

}