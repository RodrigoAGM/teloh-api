import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Room} from "../entity/Room";
import {Hotel} from "../entity/Hotel";
import {validate} from "class-validator";

export class RoomController{


    static listAll = async(req: Request, res: Response) => {
        const roomRepository = getRepository(Room);

        let rooms = await roomRepository.find();
        res.send(rooms);
    };

    static getOneById = async(req: Request, res: Response) => {
        const roomRepository = getRepository(Room);
        const id:number = req.params.id;

        try {
            let room = await roomRepository.findOneOrFail(id);
            res.send(room);
        } catch (error) {
            res.status(404).send("Room not found");
        }
    };

    static listAllbyHotel = async(req: Request, res: Response) => {

        const roomRepository = getRepository(Room);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let rooms = await roomRepository.find({where:{hotel:hotel}});
        res.send(rooms);
    };

    static getOneByIdAndHotel = async(req: Request, res: Response) => {
        const roomRepository = getRepository(Room);
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
            let room = await roomRepository.findOneOrFail({where:{hotel:hotel,id:id}});
            res.send(room);
        } catch (error) {
            res.status(404).send("Room not found");
        }
    };

    static save = async(req: Request, res: Response) => {

        const roomRepository = getRepository(Room);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let {description, name, smoking, available} = req.body;

        let room = new Room();
        room.description = description;
        room.name = name;
        room.smoking = smoking;
        room.available = available;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        room.hotel = hotel;

        const errors = await validate(room);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await roomRepository.save(room);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Room saved");
    };

    static edit = async(req: Request, res: Response) => {

        const roomRepository = getRepository(Room);
        const hotelRepository = getRepository(Hotel);

        let idHotel:number = req.params.idHotel;
        let id:number = req.params.id;
        let {description, name, smoking, available} = req.body;

        let hotel:Hotel;
        try {
            hotel = await hotelRepository.findOneOrFail(idHotel);
        } catch (error) {
            res.status(404).send("Hotel not found");
            return;
        }

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        room.description = description;
        room.name = name;
        room.smoking = smoking;
        room.available = available;
        room.hotel = hotel;

        const errors = await validate(room);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await roomRepository.save(room);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Room edited");
    };

    static delete = async(req: Request, res: Response) => {
        const roomRepository = getRepository(Room);
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

        let room:Room;

        try {
            room = await roomRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        roomRepository.delete(id);

        res.status(205).send("Room deleted successfully");
    };
}