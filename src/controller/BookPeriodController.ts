import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {BookPeriod} from "../entity/BookPeriod";

export class BookPeriodController{

    private bookPeriodRepository = getRepository(BookPeriod);

    async listAll(req: Request, res: Response){
        let bookPeriods = await this.bookPeriodRepository.find();
        res.send(bookPeriods);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let bookPeriod = await this.bookPeriodRepository.findOneOrFail(id);
            res.send(bookPeriod);
        } catch (error) {
            res.status(404).send("Book Period not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}