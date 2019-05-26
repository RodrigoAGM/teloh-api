import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Photo} from "../entity/Photo";

export class PhotoController{

    private photoRepository = getRepository(Photo);

    async listAll(req: Request, res: Response){
        let photos = await this.photoRepository.find();
        res.send(photos);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let photo = await this.photoRepository.findOneOrFail(id);
            res.send(photo);
        } catch (error) {
            res.status(404).send("Photo not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}