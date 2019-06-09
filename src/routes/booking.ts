import {checkRole} from "../middlewares/checkRole";
import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";
import {BookingController} from "../controller/BookingController";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], BookingController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    BookingController.getOneById
);

router.get(
    "/byCode/:code",
    [checkJwt, checkRole(["ADMIN"])],
    BookingController.getOneByCode
);

router.get("/:idBookPeriod([0-9]+)/myBookings/", [checkJwt, checkRole(["ADMIN"])], BookingController.listAllbyBookPeriod);

router.get(
    "/:idBookPeriod([0-9]+)/myBookings/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    BookingController.getOneByIdAndBookPeriod
);

router.get(
    "/:idBookPeriod([0-9]+)/myBookings/byCode/:code",
    [checkJwt, checkRole(["ADMIN"])],
    BookingController.getOneByCodeAndBookPeriod
);

router.get("/:idUser([0-9]+)/myBookings/", [checkJwt, checkRole(["ADMIN"])], BookingController.listAllByUser);

router.get(
    "/:idUser([0-9]+)/myBookings/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    BookingController.getOneByIdAndUser
);

router.get(
    "/:idUser([0-9]+)/myBookings/byCode/:code",
    [checkJwt, checkRole(["ADMIN"])],
    BookingController.getOneByCodeAndUser
);

router.post("/:idUser([0-9]+)/:idBookPeriod([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], BookingController.save);

router.patch("/:idUser([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], BookingController.cancel);

router.patch("/:idUser([0-9]+)/byCode/:code", [checkJwt, checkRole(["ADMIN"])], BookingController.cancelByCode);

router.delete("/:idUser([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], BookingController.delete);

export default router;