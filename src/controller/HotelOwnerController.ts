import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {HotelOwner} from "../entity/HotelOwner";

export class HotelOwnerController{

    private ownerRepository = getRepository(HotelOwner);

    async listAll(req: Request, res: Response){
        let owners = await this.ownerRepository.find();
        res.send(owners);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let owner = await this.ownerRepository.findOneOrFail(id);
            res.send(owner);
        } catch (error) {
            res.status(404).send("Owner not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}