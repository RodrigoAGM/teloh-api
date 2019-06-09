import {Router} from "express";
import auth from "./auth";
import user from "./user";
import hotelOwner from "./hotelOwner";
import hotel from "./hotel";
import photo from "./photo";
import room from "./room";
import product from "./product";
import bookPeriod from "./product";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/owner", hotelOwner);
routes.use("/hotel", hotel);
routes.use("/photo", photo);
routes.use("/room", room);
routes.use("/product", product);
routes.use("/bookPeriod", bookPeriod);

export default routes;