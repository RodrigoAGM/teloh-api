import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Product} from "../entity/product";
import {Hotel} from "../entity/Hotel";
import {validate} from "class-validator";

export class ProductController{

    async listAll(req: Request, res: Response){

        const productRepository = getRepository(Product);

        let products = await productRepository.find();
        res.send(products);
    };

    async getOneById(req: Request, res: Response) {

        const productRepository = getRepository(Product);

        const id:number = req.params.id;

        try {
            let product = await productRepository.findOneOrFail(id);
            res.send(product);
        } catch (error) {
            res.status(404).send("Product not found");
        }
    };

    static listAllbyHotel = async(req: Request, res: Response) => {

        const productRepository = getRepository(Product);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let products = await productRepository.find({where:{hotel:hotel}});
        res.send(products);
    };

    static getOneByIdAndHotel = async(req: Request, res: Response) => {
        const productRepository = getRepository(Product);
        const hotelRepository = getRepository(Hotel);

        const id:number = req.params.id;
        let idHotel:number = req.params.idHotel;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        try {
            let product = await productRepository.findOneOrFail({where:{hotel:hotel,id:id}});
            res.send(product);
        } catch (error) {
            res.status(404).send("Product not found");
        }
    };

    async save(req: Request, res: Response){

        const productRepository = getRepository(Product);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let {name, description, price, imgUrl, stock} = req.body;

        let product = new Product();
        product.description = description;
        product.name = name;
        product.price = price;
        product.imgUrl = imgUrl;
        product.stock = stock;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        product.hotel = hotel;

        const errors = await validate(product);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await productRepository.save(product);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Product saved");
    };

    async edit(req: Request, res: Response) {

        const productRepository = getRepository(Product);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let id:number = req.params.id;
        let {name, description, price, imgUrl, stock} = req.body;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let product:Product;
        try {
            product = await productRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Product not found");
            return;
        }

        product.description = description;
        product.name = name;
        product.price = price;
        product.imgUrl = imgUrl;
        product.stock = stock;
        product.hotel = hotel;

        const errors = await validate(product);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await productRepository.save(product);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Product edited");
    };

    async delete(req: Request, res: Response) {

        const productRepository = getRepository(Product);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let id:number = req.params.id;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let product:Product;

        try {
            product = await productRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Product not found");
            return;
        }

        productRepository.delete(id);

        res.status(205).send("Product deleted successfully");
    };
}