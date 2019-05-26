import {Entity, Unique} from "typeorm";


@Entity()
@Unique([])
export class Hotel{


    idHotel:number;
    address:string;
    phone:string;
    description:string;
    email:string;
    rate:number;
    name:string;

}