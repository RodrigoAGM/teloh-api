import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Hotel} from "../entity/Hotel";

export class HotelController{

    private hotelRepository = getRepository(Hotel);

    async listAll(req: Request, res: Response){
        let hotels = await this.hotelRepository.find();
        res.send(hotels);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let hotel = await this.hotelRepository.findOneOrFail(id);
            res.send(hotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}