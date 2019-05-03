import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Length} from "class-validator";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(5, 500)
    url: String;

    @Column()
    @Length(0, 100)
    description: string;
}