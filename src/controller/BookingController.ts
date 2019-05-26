import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Booking} from "../entity/Booking";
import {validate} from "class-validator";

export class BookingController{

    private bookingRepository = getRepository(Booking);

    async listAll(req: Request, res: Response){
        let bookings = await this.bookingRepository.find();
        res.send(bookings);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let booking = await this.bookingRepository.findOneOrFail(id);
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}