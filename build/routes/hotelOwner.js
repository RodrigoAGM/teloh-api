"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var express_1 = require("express");
var checkJwt_1 = require("../middlewares/checkJwt");
var HotelOwnerController_1 = require("../controller/HotelOwnerController");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelOwnerController_1.HotelOwnerController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelOwnerController_1.HotelOwnerController.getOneById);
router.post("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelOwnerController_1.HotelOwnerController.save);
router.patch("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelOwnerController_1.HotelOwnerController.edit);
router.delete("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], HotelOwnerController_1.HotelOwnerController.delete);
exports.default = router;
//# sourceMappingURL=hotelOwner.js.map