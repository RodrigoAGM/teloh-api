"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var express_1 = require("express");
var checkJwt_1 = require("../middlewares/checkJwt");
var RoomController_1 = require("../controller/RoomController");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.getOneById);
router.get("/:idHotel([0-9]+)/myRooms/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.listAllbyHotel);
router.get("/:idHotel([0-9]+)/myRooms/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.getOneByIdAndHotel);
router.post("/:idHotel([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.save);
router.patch("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.edit);
router.delete("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], RoomController_1.RoomController.delete);
exports.default = router;
//# sourceMappingURL=room.js.map