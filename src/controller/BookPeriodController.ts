import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {BookPeriod} from "../entity/BookPeriod";
import {Room} from "../entity/room";
import {validate} from "class-validator";

export class BookPeriodController{

    static listAll = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);

        let bookPeriods = await bookPeriodRepository.find();
        res.send(bookPeriods);
    };

    static getOneById = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);

        const id:number = req.params.id;

        try {
            let bookPeriod = await bookPeriodRepository.findOneOrFail(id);
            res.send(bookPeriod);
        } catch (error) {
            res.status(404).send("Book Period not found");
        }
    };

    static listAllByRoom = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);
        const roomRepository = getRepository(Room);

        let idRoom:number = req.params.idRoom;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        let bookPeriods = await bookPeriodRepository.find({where:{room:room}});
        res.send(bookPeriods);
    };

    static getOneByIdAndRoom = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);
        const roomRepository = getRepository(Room);

        const id:number = req.params.id;
        let idRoom:number = req.params.idRoom;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        try {
            let bookPeriod = await bookPeriodRepository.findOneOrFail({where:{room:room,id:id}});
            res.send(bookPeriod);
        } catch (error) {
            res.status(404).send("BookPeriod not found");
        }
    };

    static save = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);
        const roomRepository = getRepository(Room);

        let idRoom:number = req.params.idRoom;
        let {duration, description, price} = req.body;

        let bookPeriod = new BookPeriod();
        bookPeriod.duration = duration;
        bookPeriod.description = description;
        bookPeriod.price = price;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        bookPeriod.room = room;

        const errors = await validate(BookPeriod);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await bookPeriodRepository.save(bookPeriod);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("BookPeriod saved");
    };

    static edit = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);
        const roomRepository = getRepository(Room);

        let idRoom:number = req.params.idRoom;
        let id:number = req.params.id;
        let {duration, description, price} = req.body;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        let bookPeriod:BookPeriod;
        try {
            bookPeriod = await bookPeriodRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("BookPeriod not found");
            return;
        }

        bookPeriod.duration = duration;
        bookPeriod.description = description;
        bookPeriod.price = price;
        bookPeriod.room = room;

        const errors = await validate(bookPeriod);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await bookPeriodRepository.save(bookPeriod);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("BookPeriod edited");

    };

    static delete = async(req: Request, res: Response) => {

        const bookPeriodRepository = getRepository(BookPeriod);
        const roomRepository = getRepository(Room);

        let idRoom:number = req.params.idRoom;
        let id:number = req.params.id;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        let bookPeriod:BookPeriod;

        try {
            bookPeriod = await bookPeriodRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("BookPeriod not found");
            return;
        }

        bookPeriodRepository.delete(id);

        res.status(205).send("BookPeriod deleted successfully");
    };
}