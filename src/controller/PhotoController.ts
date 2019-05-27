import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Photo} from "../entity/Photo";
import {Hotel} from "../entity/Hotel";
import {HotelOwner} from "../entity/HotelOwner";
import {validate} from "class-validator";

export class PhotoController{

    static listAll = async(req: Request, res: Response) => {
        const photoRepository = getRepository(Photo);

        let photos = await photoRepository.find();
        res.send(photos);
    };

    static getOneById = async(req: Request, res: Response) => {

        const photoRepository = getRepository(Photo);
        const id:number = req.params.id;

        try {
            let photo = await photoRepository.findOneOrFail(id);
            res.send(photo);
        } catch (error) {
            res.status(404).send("Photo not found");
        }
    };

    static listAllByHotel = async(req: Request, res: Response)=>{

        const photoRepository = getRepository(Photo);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let photos = await photoRepository.find({where:{hotel:hotel}});
        res.send(photos);
    };

    static getOneByIdAndHotel = async(req: Request, res: Response)=>{

        const photoRepository = getRepository(Photo);
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
            let photo = await photoRepository.findOneOrFail({where:{hotel:hotel,id:id}});
            res.send(photo);
        } catch (error) {
            res.status(404).send("Photo not found");
        }
    };

    static save = async(req: Request, res: Response) => {

        const photoRepository = getRepository(Photo);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let {url, description} = req.body;

        let photo = new Photo();
        photo.url = url;
        photo.description = description;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        photo.hotel = hotel;

        const errors = await validate(photo);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await photoRepository.save(photo);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Photo saved");

    };

    static edit = async(req: Request, res: Response) =>{

        const photoRepository = getRepository(Photo);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let id:number = req.params.id;
        let {url, description} = req.body;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let photo:Photo;
        try {
            photo = await photoRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Photo not found");
            return;
        }

        photo.url = url;
        photo.description = description;
        photo.hotel = hotel;

        const errors = await validate(photo);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await photoRepository.save(photo);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Photo edited");

    };

    static delete = async(req: Request, res: Response) =>{

        const photoRepository = getRepository(Photo);
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

        try {
            let photo = await photoRepository.findOneOrFail(id);
            res.send(photo);
        } catch (error) {
            res.status(404).send("Photo not found");
        }

        photoRepository.delete(id);

        res.status(205).send("Photo deleted successfully");
    };
}