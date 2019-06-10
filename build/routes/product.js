"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var express_1 = require("express");
var checkJwt_1 = require("../middlewares/checkJwt");
var ProductController_1 = require("../controller/ProductController");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.getOneById);
router.get("/:idHotel([0-9]+)/myProducts/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.listAllbyHotel);
router.get("/:idHotel([0-9]+)/myProducts/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.getOneByIdAndHotel);
router.post("/:idHotel([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.save);
router.patch("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.edit);
router.delete("/:idHotel([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], ProductController_1.ProductController.delete);
exports.default = router;
//# sourceMappingURL=product.js.map