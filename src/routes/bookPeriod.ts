import {checkRole} from "../middlewares/checkRole";
import {BookPeriodController} from "../controller/BookPeriodController";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], BookPeriodController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    BookPeriodController.getOneById
);

router.get("/:idRoom([0-9]+)/myBookPeriods/", [checkJwt, checkRole(["ADMIN"])], BookPeriodController.listAllByRoom);

router.get(
    "/:idRoom([0-9]+)/myBookPeriods/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    BookPeriodController.getOneByIdAndRoom
);

router.post("/:idRoom([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], BookPeriodController.save);

router.patch("/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], BookPeriodController.edit);

router.delete("/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], BookPeriodController.delete);

export default router;