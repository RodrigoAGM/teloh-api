import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Comment} from "../entity/Comment";

export class CommentController{

    private commentRepository = getRepository(Comment);

    async listAll(req: Request, res: Response){
        let comments = await this.commentRepository.find();
        res.send(comments);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let comment = await this.commentRepository.findOneOrFail(id);
            res.send(comment);
        } catch (error) {
            res.status(404).send("Comment not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}