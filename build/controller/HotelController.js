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
var Hotel_1 = require("../entity/Hotel");
var HotelOwner_1 = require("../entity/HotelOwner");
var class_validator_1 = require("class-validator");
var HotelController = /** @class */ (function () {
    function HotelController() {
    }
    HotelController.listAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var hotelRepository, hotels;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    return [4 /*yield*/, hotelRepository.find()];
                case 1:
                    hotels = _a.sent();
                    res.send(hotels);
                    return [2 /*return*/];
            }
        });
    }); };
    HotelController.getOneById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var hotelRepository, id, hotel, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(id)];
                case 2:
                    hotel = _a.sent();
                    res.send(hotel);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.status(404).send("Hotel not found");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    HotelController.listAllByOwner = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var hotelRepository, ownerRepository, idOwner, owner, error_2, hotels;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    ownerRepository = typeorm_1.getRepository(HotelOwner_1.HotelOwner);
                    idOwner = req.params.idOwner;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ownerRepository.findOneOrFail(idOwner)];
                case 2:
                    owner = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(404).send("Owner not found");
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, hotelRepository.find({ where: { hotelOwner: owner } })];
                case 5:
                    hotels = _a.sent();
                    res.send(hotels);
                    return [2 /*return*/];
            }
        });
    }); };
    HotelController.getOneByIdAndOwner = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var hotelRepository, ownerRepository, id, idOwner, owner, error_3, hotel, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    ownerRepository = typeorm_1.getRepository(HotelOwner_1.HotelOwner);
                    id = req.params.id;
                    idOwner = req.params.idOwner;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ownerRepository.findOneOrFail(idOwner)];
                case 2:
                    owner = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.status(404).send("Owner not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail({ where: { hotelOwner: owner, id: id } })];
                case 5:
                    hotel = _a.sent();
                    res.send(hotel);
                    return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    res.status(404).send("Hotel not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    HotelController.save = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, address, phone, description, email, rate, name, idOwner, hotel, hotelRepository, ownerRepository, owner, error_5, errors, errors_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, address = _a.address, phone = _a.phone, description = _a.description, email = _a.email, rate = _a.rate, name = _a.name;
                    idOwner = req.params.idOwner;
                    hotel = new Hotel_1.Hotel();
                    hotel.address = address;
                    hotel.phone = phone;
                    hotel.description = description;
                    hotel.email = email;
                    hotel.rate = rate;
                    hotel.name = name;
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    ownerRepository = typeorm_1.getRepository(HotelOwner_1.HotelOwner);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ownerRepository.findOneOrFail(idOwner)];
                case 2:
                    owner = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _b.sent();
                    res.status(404).send("Owner not found");
                    return [2 /*return*/];
                case 4:
                    hotel.hotelOwner = owner;
                    return [4 /*yield*/, class_validator_1.validate(hotel)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, hotelRepository.save(hotel)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    errors_1 = _b.sent();
                    res.status(409).send("Address is already in use");
                    return [2 /*return*/];
                case 9:
                    res.status(201).send("Hotel created");
                    return [2 /*return*/];
            }
        });
    }); };
    HotelController.edit = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var ownerRepository, hotelRepository, idOwner, id, _a, address, phone, description, email, rate, name, owner, error_6, hotel, error_7, errors, errors_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ownerRepository = typeorm_1.getRepository(HotelOwner_1.HotelOwner);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    idOwner = req.params.idOwner;
                    id = req.params.id;
                    _a = req.body, address = _a.address, phone = _a.phone, description = _a.description, email = _a.email, rate = _a.rate, name = _a.name;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ownerRepository.findOneOrFail(idOwner)];
                case 2:
                    owner = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _b.sent();
                    res.status(404).send("Owner not found");
                    return [2 /*return*/];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(id)];
                case 5:
                    hotel = _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_7 = _b.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 7:
                    hotel.address = address;
                    hotel.phone = phone;
                    hotel.description = description;
                    hotel.email = email;
                    hotel.rate = rate;
                    hotel.name = name;
                    hotel.hotelOwner = owner;
                    return [4 /*yield*/, class_validator_1.validate(hotel)];
                case 8:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, hotelRepository.save(hotel)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11:
                    errors_2 = _b.sent();
                    res.status(409).send("Address is already in use");
                    return [2 /*return*/];
                case 12:
                    res.status(201).send("Hotel edited");
                    return [2 /*return*/];
            }
        });
    }); };
    HotelController.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var ownerRepository, hotelRepository, idOwner, id, owner, error_8, hotel, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ownerRepository = typeorm_1.getRepository(HotelOwner_1.HotelOwner);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    idOwner = req.params.idOwner;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ownerRepository.findOneOrFail(idOwner)];
                case 2:
                    owner = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    res.status(404).send("Owner not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(id)];
                case 5:
                    hotel = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_9 = _a.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 7:
                    hotelRepository.delete(id);
                    res.status(205).send("Hotel deleted successfully");
                    return [2 /*return*/];
            }
        });
    }); };
    return HotelController;
}());
exports.HotelController = HotelController;
//# sourceMappingURL=HotelController.js.map