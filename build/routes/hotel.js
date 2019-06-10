"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var express_1 = require("express");
var checkJwt_1 = require("../middlewares/checkJwt");
var HotelController_1 = require("../controller/HotelController");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.getOneById);
router.get("/myHotels/:idOwner([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.listAllByOwner);
router.get("/myHotels/:idOwner([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.getOneByIdAndOwner);
router.post("/:idOwner([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.save);
router.patch("/:idOwner([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.edit);
router.delete("/:idOwner([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelController_1.HotelController.delete);
exports.default = router;
//# sourceMappingURL=hotel.js.map