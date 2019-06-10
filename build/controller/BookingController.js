"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Booking_1 = require("../entity/Booking");
var BookPeriod_1 = require("../entity/BookPeriod");
var User_1 = require("../entity/User");
var class_validator_1 = require("class-validator");
var Product_1 = require("../entity/Product");
var Product_Booking_1 = require("../entity/Product_Booking");
var BookingController = /** @class */ (function () {
    function BookingController() {
    }
    BookingController.listAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, bookings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    return [4 /*yield*/, bookingRepository.find()];
                case 1:
                    bookings = _a.sent();
                    res.send(bookings);
                    return [2 /*return*/];
            }
        });
    }); };
    BookingController.getOneById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, id, booking, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail(id)];
                case 2:
                    booking = _a.sent();
                    res.send(booking);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    BookingController.getOneByCode = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, code, booking, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    code = req.params.code;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail({ where: { code: code } })];
                case 2:
                    booking = _a.sent();
                    res.send(booking);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    BookingController.listAllbyBookPeriod = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, bookPeriodRepository, idBookPeriod, bookPeriod, error_3, bookings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    bookPeriodRepository = typeorm_1.getRepository(BookPeriod_1.BookPeriod);
                    idBookPeriod = req.params.idBookPeriod;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bookPeriodRepository.findOneOrFail(idBookPeriod)];
                case 2:
                    bookPeriod = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.status(404).send("BookPeriod not found");
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, bookingRepository.find({ where: { bookPeriod: bookPeriod } })];
                case 5:
                    bookings = _a.sent();
                    res.send(bookings);
                    return [2 /*return*/];
            }
        });
    }); };
    BookingController.getOneByIdAndBookPeriod = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, bookPeriodRepository, id, idBookPeriod, bookPeriod, error_4, booking, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    bookPeriodRepository = typeorm_1.getRepository(BookPeriod_1.BookPeriod);
                    id = req.params.id;
                    idBookPeriod = req.params.idBookPeriod;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bookPeriodRepository.findOneOrFail(idBookPeriod)];
                case 2:
                    bookPeriod = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    res.status(404).send("BookPeriod not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail({ where: { bookPeriod: bookPeriod, id: id } })];
                case 5:
                    booking = _a.sent();
                    res.send(booking);
                    return [3 /*break*/, 7];
                case 6:
                    error_5 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    BookingController.getOneByCodeAndBookPeriod = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, bookPeriodRepository, code, idBookPeriod, bookPeriod, error_6, booking, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    bookPeriodRepository = typeorm_1.getRepository(BookPeriod_1.BookPeriod);
                    code = req.params.code;
                    idBookPeriod = req.params.idBookPeriod;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bookPeriodRepository.findOneOrFail(idBookPeriod)];
                case 2:
                    bookPeriod = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    res.status(404).send("BookPeriod not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail({ where: { bookPeriod: bookPeriod, code: code } })];
                case 5:
                    booking = _a.sent();
                    res.send(booking);
                    return [3 /*break*/, 7];
                case 6:
                    error_7 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    BookingController.listAllByUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, idUser, user, error_8, bookings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    idUser = req.params.idUser;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, bookingRepository.find({ where: { user: user } })];
                case 5:
                    bookings = _a.sent();
                    res.send(bookings);
                    return [2 /*return*/];
            }
        });
    }); };
    BookingController.getOneByIdAndUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, id, idUser, user, error_9, booking, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    id = req.params.id;
                    idUser = req.params.idUser;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail({ where: { user: user, id: id } })];
                case 5:
                    booking = _a.sent();
                    res.send(booking);
                    return [3 /*break*/, 7];
                case 6:
                    error_10 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    BookingController.getOneByCodeAndUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, code, idUser, user, error_11, booking, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    code = req.params.code;
                    idUser = req.params.idUser;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail({ where: { user: user, code: code } })];
                case 5:
                    booking = _a.sent();
                    res.send(booking);
                    return [3 /*break*/, 7];
                case 6:
                    error_12 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    BookingController.save = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, bookPeriodRepository, productRepository, product_bookingRepository, idUser, idBookPeriod, _a, code, active, hasProducts, productId, quantity, booking, user, error_13, bookPeriod, error_14, product, error_15, product_booking, errors_1, errors, errors_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    bookPeriodRepository = typeorm_1.getRepository(BookPeriod_1.BookPeriod);
                    productRepository = typeorm_1.getRepository(Product_1.Product);
                    product_bookingRepository = typeorm_1.getRepository(Product_Booking_1.Product_Booking);
                    idUser = req.params.idUser;
                    idBookPeriod = req.params.idBookPeriod;
                    _a = req.body, code = _a.code, active = _a.active, hasProducts = _a.hasProducts, productId = _a.productId, quantity = _a.quantity;
                    booking = new Booking_1.Booking();
                    booking.code = code;
                    booking.active = active;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_13 = _b.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    booking.user = user;
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, bookPeriodRepository.findOneOrFail(idBookPeriod)];
                case 6:
                    bookPeriod = _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_14 = _b.sent();
                    res.status(404).send("Book Period not found");
                    return [2 /*return*/];
                case 8:
                    booking.bookPeriod = bookPeriod;
                    if (!(hasProducts == true)) return [3 /*break*/, 16];
                    product = void 0;
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, productRepository.findOneOrFail(productId)];
                case 10:
                    product = _b.sent();
                    return [3 /*break*/, 12];
                case 11:
                    error_15 = _b.sent();
                    res.status(404).send("Product not found");
                    return [2 /*return*/];
                case 12:
                    product_booking = new Product_Booking_1.Product_Booking();
                    product_booking.booking = booking;
                    product_booking.product = product;
                    product_booking.quantity = quantity;
                    _b.label = 13;
                case 13:
                    _b.trys.push([13, 15, , 16]);
                    return [4 /*yield*/, product_bookingRepository.save(product_booking)];
                case 14:
                    _b.sent();
                    return [3 /*break*/, 16];
                case 15:
                    errors_1 = _b.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 16: return [4 /*yield*/, class_validator_1.validate(Booking_1.Booking)];
                case 17:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 18;
                case 18:
                    _b.trys.push([18, 20, , 21]);
                    return [4 /*yield*/, bookingRepository.save(booking)];
                case 19:
                    _b.sent();
                    return [3 /*break*/, 21];
                case 20:
                    errors_2 = _b.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 21:
                    res.status(201).send("Booking saved");
                    return [2 /*return*/];
            }
        });
    }); };
    BookingController.cancel = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, idUser, id, code, user, error_16, booking, error_17, errors, errors_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    idUser = req.params.idUser;
                    id = req.params.id;
                    code = req.body.code;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_16 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail(id)];
                case 5:
                    booking = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_17 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [2 /*return*/];
                case 7:
                    booking.code = code;
                    booking.active = false;
                    booking.user = user;
                    return [4 /*yield*/, class_validator_1.validate(booking)];
                case 8:
                    errors = _a.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, bookingRepository.save(booking)];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    errors_3 = _a.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 12:
                    res.status(201).send("Booking edited");
                    return [2 /*return*/];
            }
        });
    }); };
    BookingController.cancelByCode = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, idUser, code, user, error_18, booking, error_19, errors, errors_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    idUser = req.params.idUser;
                    code = req.params.code;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_18 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail({ where: { code: code } })];
                case 5:
                    booking = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_19 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [2 /*return*/];
                case 7:
                    booking.code = code;
                    booking.active = false;
                    booking.user = user;
                    return [4 /*yield*/, class_validator_1.validate(booking)];
                case 8:
                    errors = _a.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, bookingRepository.save(booking)];
                case 10:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 11:
                    errors_4 = _a.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 12:
                    res.status(201).send("Booking edited");
                    return [2 /*return*/];
            }
        });
    }); };
    BookingController.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var bookingRepository, userRepository, idUser, id, user, error_20, booking, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    bookingRepository = typeorm_1.getRepository(Booking_1.Booking);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    idUser = req.params.idUser;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_20 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, bookingRepository.findOneOrFail(id)];
                case 5:
                    booking = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_21 = _a.sent();
                    res.status(404).send("Booking not found");
                    return [2 /*return*/];
                case 7:
                    bookingRepository.delete(id);
                    res.status(205).send("Booking deleted successfully");
                    return [2 /*return*/];
            }
        });
    }); };
    return BookingController;
}());
exports.BookingController = BookingController;
//# sourceMappingURL=BookingController.js.map