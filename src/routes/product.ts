import {checkRole} from "../middlewares/checkRole";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";
import {ProductController} from "../controller/ProductController";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], ProductController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    ProductController.getOneById
);

router.get("/:idHotel([0-9]+)/myProducts/", [checkJwt, checkRole(["ADMIN"])], ProductController.listAllbyHotel);

router.get(
    "/:idHotel([0-9]+)/myProducts/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    ProductController.getOneByIdAndHotel
);

router.post("/:idHotel([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], ProductController.save);

router.patch("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], ProductController.edit);

router.delete("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], ProductController.delete);

export default router;