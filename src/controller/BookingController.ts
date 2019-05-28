import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {Booking} from "../entity/Booking";
import {BookPeriod} from "../entity/BookPeriod";
import {User} from "../entity/User";
import {validate} from "class-validator";
import {Product} from "../entity/Product";
import {Product_Booking} from "../entity/Product_Booking";

export class BookingController{

    static listAll = async(req: Request, res: Response) => {
        const bookingRepository = getRepository(Booking);

        let bookings = await bookingRepository.find();
        res.send(bookings);
    };

    static getOneById = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const id:number = req.params.id;

        try {
            let booking = await bookingRepository.findOneOrFail(id);
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    static getOneByCode = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const code:number = req.params.code;

        try {
            let booking = await bookingRepository.findOneOrFail({where:{code:code}});
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    static listAllbyBookPeriod = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const bookPeriodRepository = getRepository(BookPeriod);

        let idBookPeriod:number = req.params.idBookPeriod;

        let bookPeriod:BookPeriod;
        try {
            bookPeriod = await bookPeriodRepository.findOneOrFail(idBookPeriod);
        } catch (error) {
            res.status(404).send("BookPeriod not found");
            return;
        }

        let bookings = await bookingRepository.find({where:{bookPeriod:bookPeriod}});
        res.send(bookings);
    };

    static getOneByIdAndBookPeriod = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const bookPeriodRepository = getRepository(BookPeriod);

        const id:number = req.params.id;
        let idBookPeriod:number = req.params.idBookPeriod;

        let bookPeriod:BookPeriod;
        try {
            bookPeriod = await bookPeriodRepository.findOneOrFail(idBookPeriod);
        } catch (error) {
            res.status(404).send("BookPeriod not found");
            return;
        }

        try {
            let booking = await bookingRepository.findOneOrFail({where:{bookPeriod:bookPeriod,id:id}});
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    static getOneByCodeAndBookPeriod = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const bookPeriodRepository = getRepository(BookPeriod);

        const code:number = req.params.code;
        let idBookPeriod:number = req.params.idBookPeriod;

        let bookPeriod:BookPeriod;
        try {
            bookPeriod = await bookPeriodRepository.findOneOrFail(idBookPeriod);
        } catch (error) {
            res.status(404).send("BookPeriod not found");
            return;
        }

        try {
            let booking = await bookingRepository.findOneOrFail({where:{bookPeriod:bookPeriod,code:code}});
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    static listAllByUser = async(req: Request, res: Response)=>{
        const bookingRepository = getRepository(Booking);
        const userRepository = getRepository(User);

        let idUser:number = req.params.idUser;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let bookings = await bookingRepository.find({where:{user:user}});
        res.send(bookings);
    };

    static getOneByIdAndUser = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
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
            let booking = await bookingRepository.findOneOrFail({where:{user:user,id:id}});
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    static getOneByCodeAndUser = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const userRepository = getRepository(User);

        const code:number = req.params.code;
        let idUser:number = req.params.idUser;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        try {
            let booking = await bookingRepository.findOneOrFail({where:{user:user,code:code}});
            res.send(booking);
        } catch (error) {
            res.status(404).send("Booking not found");
        }
    };

    static save = async(req: Request, res: Response) => {
        const bookingRepository = getRepository(Booking);
        const userRepository = getRepository(User);
        const bookPeriodRepository = getRepository(BookPeriod);
        const productRepository = getRepository(Product);
        const product_bookingRepository = getRepository(Product_Booking);

        let idUser:number = req.params.idUser;
        let idBookPeriod:number = req.params.idBookPeriod;
        let {code, active, hasProducts , productId, quantity} = req.body;

        let booking = new Booking();
        booking.code = code;
        booking.active = active;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }
        booking.user = user;

        let bookPeriod:BookPeriod;
        try {
            bookPeriod = await bookPeriodRepository.findOneOrFail(idBookPeriod);
        } catch (error) {
            res.status(404).send("Book Period not found");
            return;
        }
        booking.bookPeriod = bookPeriod;

        if(hasProducts == true){

            let product:Product;
            try {
                product = await productRepository.findOneOrFail(productId);
            } catch (error) {
                res.status(404).send("Product not found");
                return;
            }

            let product_booking = new Product_Booking();
            product_booking.booking = booking;
            product_booking.product = product;
            product_booking.quantity = quantity;

            try {
                await product_bookingRepository.save(product_booking);
            }catch (errors){
                res.status(409).send("Something went wrong");
                return;
            }
        }

        const errors = await validate(Booking);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }

        try {
            await bookingRepository.save(booking);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Booking saved");
    };

    static cancel  = async(req: Request, res: Response) =>{

        const bookingRepository = getRepository(Booking);
        const userRepository = getRepository(User);

        let idUser:number = req.params.idUser;
        let id:number = req.params.id;
        let {code} = req.body;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let booking:Booking;
        try {
            booking = await bookingRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Booking not found");
            return;
        }

        booking.code = code;
        booking.active = false;
        booking.user = user;

        const errors = await validate(booking);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await bookingRepository.save(booking);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Booking edited");
    };

    static cancelByCode = async(req: Request, res: Response) =>{

        const bookingRepository = getRepository(Booking);
        const userRepository = getRepository(User);

        let idUser:number = req.params.idUser;
        let code:string = req.params.code;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let booking:Booking;
        try {
            booking = await bookingRepository.findOneOrFail({where:{code:code}});
        } catch (error) {
            res.status(404).send("Booking not found");
            return;
        }

        booking.code = code;
        booking.active = false;
        booking.user = user;

        const errors = await validate(booking);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }


        try {
            await bookingRepository.save(booking);
        }catch (errors){
            res.status(409).send("Something went wrong");
            return;
        }

        res.status(201).send("Booking edited");
    };

    static delete = async(req: Request, res: Response) => {

        const bookingRepository = getRepository(Booking);
        const userRepository = getRepository(User);

        let idUser:number = req.params.idUser;
        let id:number = req.params.id;

        let user:User;
        try {
            user = await userRepository.findOneOrFail(idUser);
        } catch (error) {
            res.status(404).send("User not found");
            return;
        }

        let booking:Booking;

        try {
            booking = await bookingRepository.findOneOrFail(id);
        } catch (error) {
            res.status(404).send("Booking not found");
            return;
        }

        bookingRepository.delete(id);

        res.status(205).send("Booking deleted successfully");
    };
}