import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {HotelOwner} from "../entity/HotelOwner";
import {validate} from "class-validator";

export class HotelOwnerController{

    static listAll = async (req: Request, res: Response) => {

        const ownerRepository = getRepository(HotelOwner);

        let owners = await ownerRepository.find();
        res.send(owners);
    };

    static getOneById = async (req: Request, res: Response) => {

        const id:number = req.params.id;

        const ownerRepository = getRepository(HotelOwner);

        try {
            let owner = await ownerRepository.findOneOrFail(id);
            res.send(owner);
        } catch (error) {
            res.status(404).send("Owner not found");
        }
    };

    static save = async (req: Request, res: Response) => {

        let {username, password} = req.body;
        let owner = new HotelOwner();
        owner.password = password;
        owner.username = username;

        const errors = await validate(owner);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        const ownerRepository = getRepository(HotelOwner);

        try {
            await ownerRepository.save(owner);
        }catch (errors){
            res.status(409).send("username already in use");
            return;
        }

        res.status(201).send("Owner created");
    };

    static edit = async(req: Request, res: Response) => {
        let id:number = req.params.id;
        let {username, password} = req.body;

        const ownerRepository = getRepository(HotelOwner);
        let owner:HotelOwner;
        try {
            owner = await ownerRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }

        owner.password = password;
        owner.username = username;

        const errors = await validate(owner);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        try {
            await ownerRepository.save(owner);
        }catch (errors){
            res.status(409).send("username already in use");
            return;
        }

        res.status(204).send("Owner edited");

    };

    static delete = async(req: Request, res: Response) => {

        const ownerRepository = getRepository(HotelOwner);
        const id = req.params.id;


        let owner: HotelOwner;

        try {
            owner = await ownerRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Owner not found");
            return;
        }

        ownerRepository.delete(id);

        res.status(205).send("Owner deleted successfully");
    };
}