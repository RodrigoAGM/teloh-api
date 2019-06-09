import {checkRole} from "../middlewares/checkRole";
import {checkJwt} from "../middlewares/checkJwt";
import {Router} from "express";
import {CommentController} from "../controller/CommentController";

const router = Router();

router.get("/", [checkJwt, checkRole(["ADMIN"])], CommentController.listAll);

router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    CommentController.getOneById
);

router.get("/:idRoom([0-9]+)/myComments/", [checkJwt, checkRole(["ADMIN"])], CommentController.listAllByRoom);

router.get(
    "/:idRoom([0-9]+)/myComments/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    CommentController.getOneByIdAndRoom
);

router.get("/:idUser([0-9]+)/myComments/", [checkJwt, checkRole(["ADMIN"])], CommentController.listAllByUser);

router.get(
    "/:idUser([0-9]+)/myComments/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    CommentController.getOneByIdAndUser
);

router.post("/:idUser([0-9]+)/:idRoom([0-9]+)/", [checkJwt, checkRole(["ADMIN"])], CommentController.save);

router.patch("/:idUser([0-9]+)/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], CommentController.save);

router.delete("/:idUser([0-9]+)/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt, checkRole(["ADMIN"])], CommentController.delete);

export default router;