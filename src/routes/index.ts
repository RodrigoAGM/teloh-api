import {Router} from "express";
import auth from "./auth";
import user from "./user";
import hotelOwner from "./hotelOwner";
import hotel from "./hotel"

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/owner", hotelOwner);
routes.use("/hotel", hotel);

export default routes;