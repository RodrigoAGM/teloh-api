import {checkRole} from "../middlewares/checkRole";
import {PhotoController} from "../controller/PhotoController";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], PhotoController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    PhotoController.getOneById
);

router.get("/:idHotel([0-9]+)/myPhotos/", [checkJwt, checkRole(["ADMIN"])], PhotoController.listAllByHotel);

router.get(
    "/:idHotel([0-9]+)/myPhotos/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    PhotoController.getOneByIdAndHotel
);

router.post("/:idHotel([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], PhotoController.save);

router.patch("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], PhotoController.edit);

router.delete("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], PhotoController.delete);

export default router;