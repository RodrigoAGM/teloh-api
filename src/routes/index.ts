import {Router} from "express";
import auth from "./auth";
import user from "./user";
import hotelOwner from "./hotelOwner";
import hotel from "./hotel";
import photo from "./photo";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/owner", hotelOwner);
routes.use("/hotel", hotel);
routes.use("/photo", photo);

export default routes;