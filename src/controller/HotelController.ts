import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Hotel} from "../entity/Hotel";
import {HotelOwner} from "../entity/HotelOwner";
import {validate} from "class-validator";

export class HotelController{

    static listAll = async (req: Request, res: Response) => {
        const hotelRepository = getRepository(Hotel);

        let hotels = await hotelRepository.find();
        res.send(hotels);
    };

    static getOneById = async(req: Request, res: Response) => {

        const hotelRepository = getRepository(Hotel);

        const id:number = req.params.id;

        try {
            let hotel = await hotelRepository.findOneOrFail(id);
            res.send(hotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
        }
    };

    static listAllByOwner = async (req: Request, res: Response) => {
        const hotelRepository = getRepository(Hotel);
        const ownerRepository = getRepository(HotelOwner);

        let idOwner:number = req.params.idOwner;

        let owner:HotelOwner;
        try {
            owner = await ownerRepository.findOneOrFail(idOwner);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }

        let hotels = await hotelRepository.find({where:{hotelOwner:owner}});
        res.send(hotels);
    };

    static getOneByIdAndOwner = async(req: Request, res: Response) => {

        const hotelRepository = getRepository(Hotel);
        const ownerRepository = getRepository(HotelOwner);

        const id:number = req.params.id;
        let idOwner:number = req.params.idOwner;

        let owner:HotelOwner;
        try {
            owner = await ownerRepository.findOneOrFail(idOwner);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }

        try {
            let hotel = await hotelRepository.findOneOrFail({where:{hotelOwner:owner, id:id}});
            res.send(hotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
        }
    };

    static save = async(req: Request, res: Response) => {

        let {address, phone, description, email, rate, name} = req.body;
        let idOwner:number = req.params.idOwner;

        let hotel = new Hotel();
        hotel.address = address;
        hotel.phone = phone;
        hotel.description = description;
        hotel.email = email;
        hotel.rate = rate;
        hotel.name = name;

        const hotelRepository = getRepository(Hotel);
        const ownerRepository = getRepository(HotelOwner);

        let owner:HotelOwner;
        try {
            owner = await ownerRepository.findOneOrFail(idOwner);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }

        hotel.hotelOwner = owner;

        const errors = await validate(hotel);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await hotelRepository.save(hotel);
        }catch (errors){
            res.status(409).send("Address is already in use");
            return;
        }

        res.status(201).send("Hotel created");
    };

    static edit = async(req: Request, res: Response) => {

        const ownerRepository = getRepository(HotelOwner);
        const hotelRepository = getRepository(Hotel);

        let idOwner:number = req.params.idOwner;
        let id:number = req.params.id;
        let {address, phone, description, email, rate, name} = req.body;

        let owner:HotelOwner;
        try {
            owner = await ownerRepository.findOneOrFail(idOwner);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }


        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        hotel.address = address;
        hotel.phone = phone;
        hotel.description = description;
        hotel.email = email;
        hotel.rate = rate;
        hotel.name = name;
        hotel.hotelOwner = owner;

        const errors = await validate(hotel);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await hotelRepository.save(hotel);
        }catch (errors){
            res.status(409).send("Address is already in use");
            return;
        }

        res.status(201).send("Hotel edited");
    };

    static delete = async(req: Request, res: Response) => {

        const ownerRepository = getRepository(HotelOwner);
        const hotelRepository = getRepository(Hotel);

        let idOwner:number = req.params.idOwner;
        let id:number = req.params.id;

        let owner:HotelOwner;
        try {
            owner = await ownerRepository.findOneOrFail(idOwner);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        hotelRepository.delete(id);

        res.status(205).send("Hotel deleted successfully");
    };
}