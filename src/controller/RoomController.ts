import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Room} from "../entity/Room";

export class RoomController{

    private roomRepository = getRepository(Room);

    async listAll(req: Request, res: Response){
        let rooms = await this.roomRepository.find();
        res.send(rooms);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let room = await this.roomRepository.findOneOrFail(id);
            res.send(room);
        } catch (error) {
            res.status(404).send("Room not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}