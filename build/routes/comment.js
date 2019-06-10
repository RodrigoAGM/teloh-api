"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var checkJwt_1 = require("../middlewares/checkJwt");
var express_1 = require("express");
var CommentController_1 = require("../controller/CommentController");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.getOneById);
router.get("/:idRoom([0-9]+)/myComments/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.listAllByRoom);
router.get("/:idRoom([0-9]+)/myComments/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.getOneByIdAndRoom);
router.get("/:idUser([0-9]+)/myComments/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.listAllByUser);
router.get("/:idUser([0-9]+)/myComments/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.getOneByIdAndUser);
router.post("/:idUser([0-9]+)/:idRoom([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.save);
router.patch("/:idUser([0-9]+)/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.save);
router.delete("/:idUser([0-9]+)/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], CommentController_1.CommentController.delete);
exports.default = router;
//# sourceMappingURL=comment.js.map