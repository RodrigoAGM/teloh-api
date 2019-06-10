"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var PhotoController_1 = require("../controller/PhotoController");
var express_1 = require("express");
var checkJwt_1 = require("../middlewares/checkJwt");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.getOneById);
router.get("/:idHotel([0-9]+)/myPhotos/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.listAllByHotel);
router.get("/:idHotel([0-9]+)/myPhotos/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.getOneByIdAndHotel);
router.post("/:idHotel([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.save);
router.patch("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.edit);
router.delete("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], PhotoController_1.PhotoController.delete);
exports.default = router;
//# sourceMappingURL=photo.js.map