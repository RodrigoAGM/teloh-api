import {checkRole} from "../middlewares/checkRole";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";
import {HotelController} from "../controller/HotelController";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], HotelController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    HotelController.getOneById
);

router.get("/myHotels/:idOwner([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], HotelController.listAllByOwner);

router.get(
    "/myHotels/:idOwner([0-9]+)/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    HotelController.getOneByIdAndOwner
);

router.post("/:idOwner([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], HotelController.save);

router.patch("/:idOwner([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], HotelController.edit);

router.delete("/:idOwner([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], HotelController.delete);

export default router;