import {checkRole} from "../middlewares/checkRole";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";
import {RoomController} from "../controller/RoomController";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], RoomController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    RoomController.getOneById
);

router.get("/:idHotel([0-9]+)/myRooms/", [checkJwt, checkRole(["ADMIN"])], RoomController.listAllbyHotel);

router.get(
    "/:idHotel([0-9]+)/myRooms/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    RoomController.getOneByIdAndHotel
);

router.post("/:idHotel([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], RoomController.save);

router.patch("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], RoomController.edit);

router.delete("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], RoomController.delete);

export default router;