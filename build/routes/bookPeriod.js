"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkRole_1 = require("../middlewares/checkRole");
var BookPeriodController_1 = require("../controller/BookPeriodController");
var express_1 = require("express");
var checkJwt_1 = require("../middlewares/checkJwt");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.listAll);
router.get("/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.getOneById);
router.get("/:idRoom([0-9]+)/myBookPeriods/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.listAllByRoom);
router.get("/:idRoom([0-9]+)/myBookPeriods/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.getOneByIdAndRoom);
router.post("/:idRoom([0-9]+)/", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.save);
router.patch("/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.edit);
router.delete("/:idRoom([0-9]+)/:id([0-9]+)", [checkJwt_1.checkJwt, checkRole_1.checkRole(["ADMIN"])], BookPeriodController_1.BookPeriodController.delete);
exports.default = router;
//# sourceMappingURL=bookPeriod.js.map