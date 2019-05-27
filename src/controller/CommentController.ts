import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Comment} from "../entity/Comment";
import {User} from "../entity/User";
import {Room} from "../entity/Room";
import {validate} from "class-validator";

export class CommentController{

    private commentRepository = getRepository(Comment);

    static listAll = async(req: Request, res: Response) => {
        const commentRepository = getRepository(Comment);

        let comments = await commentRepository.find();
        res.send(comments);
    };

    static getOneById = async(req: Request, res: Response) => {
        const commentRepository = getRepository(Comment);

        const id:number = req.params.id;

        try {
            let comment = await commentRepository.findOneOrFail(id);
            res.send(comment);
        } catch (error) {
            res.status(404).send("Comment not found");
        }
    };

    static listAllByUser = async(req: Request, res: Response) => {
        const commentRepository = getRepository(Comment);
        const userRepository = getRepository(User);

        let idUser:number = req.params.idUser;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let comments = await commentRepository.find({where:{user:user}});
        res.send(comments);
    };

    static getOneByIdAndUser = async(req: Request, res: Response) => {
        const commentRepository = getRepository(Comment);
        const userRepository = getRepository(User);

        const id:number = req.params.id;
        let idUser:number = req.params.idUser;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        try {
            let comment = await commentRepository.findOneOrFail({where:{user:user,id:id}});
            res.send(comment);
        } catch (error) {
            res.status(404).send("Comment not found");
        }
    };

    static listAllByRoom = async(req: Request, res: Response) => {

        const commentRepository = getRepository(Comment);
        const roomRepository = getRepository(Room);

        let idRoom:number = req.params.idRoom;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        let comments = await commentRepository.find({where:{room:room}});
        res.send(comments);
    };

    static getOneByIdAndRoom = async(req: Request, res: Response) => {

        const commentRepository = getRepository(Comment);
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
            let comment = await commentRepository.findOneOrFail({where:{room:room,id:id}});
            res.send(comment);
        } catch (error) {
            res.status(404).send("Comment not found");
        }
    };

    static save = async(req: Request, res: Response) => {
        const commentRepository = getRepository(Comment);
        const userRepository = getRepository(User);
        const roomRepository = getRepository(Room);

        let idUser:number = req.params.idUser;
        let idRoom:number = req.params.idRoom;
        let {description, published} = req.body;

        let comment = new Comment();
        comment.description = description;
        comment.published = published;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }
        comment.user = user;

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }
        comment.room = room;


        const errors = await validate(Comment);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        try {
            await commentRepository.save(comment);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Comment saved");
    };

    static edit = async(req: Request, res: Response) => {

        const commentRepository = getRepository(Comment);
        const userRepository = getRepository(User);
        const roomRepository = getRepository(Room);

        let idUser:number = req.params.idUser;
        let idRoom:number = req.params.idRoom;
        let id:number = req.params.id;
        let {description, published} = req.body;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        let comment:Comment;
        try {
            comment = await commentRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Comment not found");
            return;
        }

        comment.description = description;
        comment.published = published;
        comment.user = user;
        comment.room = room;

        const errors = await validate(comment);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        try {
            await commentRepository.save(comment);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Comment edited");

    };

    static delete = async(req: Request, res: Response) => {

        const commentRepository = getRepository(Comment);
        const userRepository = getRepository(User);
        const roomRepository = getRepository(Room);

        let idUser:number = req.params.idUser;
        let idRoom:number = req.params.idRoom;
        let id:number = req.params.id;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let room:Room;
        try {
            room = await roomRepository.findOneOrFail(idRoom);
        } catch (error) {
            res.status(404).send("Room not found");
            return;
        }

        let comment:Comment;
        try {
            comment = await commentRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Comment not found");
            return;
        }

        commentRepository.delete(id);

        res.status(205).send("Comment deleted successfully");
    };
}