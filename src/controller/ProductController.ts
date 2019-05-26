import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Product} from "../entity/product";

export class ProductController{

    private productRepository = getRepository(Product);

    async listAll(req: Request, res: Response){
        let products = await this.productRepository.find();
        res.send(products);
    };

    async getOneById(req: Request, res: Response) {

        const id:number = req.params.id;

        try {
            let product = await this.productRepository.findOneOrFail(id);
            res.send(product);
        } catch (error) {
            res.status(404).send("Product not found");
        }
    };

    async save(req: Request, res: Response){

    };

    async edit(req: Request, res: Response) {

    };

    async delete(req: Request, res: Response) {

    };
}