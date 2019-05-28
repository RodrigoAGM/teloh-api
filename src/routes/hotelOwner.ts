import {checkRole} from "../middlewares/checkRole";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";
import {HotelOwnerController} from "../controller/HotelOwnerController";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], HotelOwnerController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    HotelOwnerController.getOneById
);

router.post("/", [checkJwt, checkRole(["ADMIN"])], HotelOwnerController.save);

router.patch("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], HotelOwnerController.edit);

router.delete("/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], HotelOwnerController.delete);

export default router;