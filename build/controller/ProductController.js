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
var product_1 = require("../entity/Product");
var Hotel_1 = require("../entity/Hotel");
var class_validator_1 = require("class-validator");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.listAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    return [4 /*yield*/, productRepository.find()];
                case 1:
                    products = _a.sent();
                    res.send(products);
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.getOneById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, id, product, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productRepository.findOneOrFail(id)];
                case 2:
                    product = _a.sent();
                    res.send(product);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.status(404).send("Product not found");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ProductController.listAllbyHotel = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, hotelRepository, idHotel, hotel, error_2, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    idHotel = req.params.idHotel;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(idHotel)];
                case 2:
                    hotel = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, productRepository.find({ where: { hotel: hotel } })];
                case 5:
                    products = _a.sent();
                    res.send(products);
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.getOneByIdAndHotel = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, hotelRepository, id, idHotel, hotel, error_3, product, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    id = req.params.id;
                    idHotel = req.params.idHotel;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(idHotel)];
                case 2:
                    hotel = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, productRepository.findOneOrFail({ where: { hotel: hotel, id: id } })];
                case 5:
                    product = _a.sent();
                    res.send(product);
                    return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    res.status(404).send("Product not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    ProductController.save = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, hotelRepository, idHotel, _a, name, description, price, imgUrl, stock, product, hotel, error_5, errors, errors_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    idHotel = req.params.idHotel;
                    _a = req.body, name = _a.name, description = _a.description, price = _a.price, imgUrl = _a.imgUrl, stock = _a.stock;
                    product = new product_1.Product();
                    product.description = description;
                    product.name = name;
                    product.price = price;
                    product.imgUrl = imgUrl;
                    product.stock = stock;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(idHotel)];
                case 2:
                    hotel = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _b.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 4:
                    product.hotel = hotel;
                    return [4 /*yield*/, class_validator_1.validate(product)];
                case 5:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, productRepository.save(product)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    errors_1 = _b.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 9:
                    res.status(201).send("Product saved");
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.edit = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, hotelRepository, idHotel, id, _a, name, description, price, imgUrl, stock, hotel, error_6, product, error_7, errors, errors_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    idHotel = req.params.idHotel;
                    id = req.params.id;
                    _a = req.body, name = _a.name, description = _a.description, price = _a.price, imgUrl = _a.imgUrl, stock = _a.stock;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(idHotel)];
                case 2:
                    hotel = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _b.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, productRepository.findOneOrFail(id)];
                case 5:
                    product = _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_7 = _b.sent();
                    res.status(404).send("Product not found");
                    return [2 /*return*/];
                case 7:
                    product.description = description;
                    product.name = name;
                    product.price = price;
                    product.imgUrl = imgUrl;
                    product.stock = stock;
                    product.hotel = hotel;
                    return [4 /*yield*/, class_validator_1.validate(product)];
                case 8:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, productRepository.save(product)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11:
                    errors_2 = _b.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 12:
                    res.status(201).send("Product edited");
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var productRepository, hotelRepository, idHotel, id, hotel, error_8, product, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    productRepository = typeorm_1.getRepository(product_1.Product);
                    hotelRepository = typeorm_1.getRepository(Hotel_1.Hotel);
                    idHotel = req.params.idHotel;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hotelRepository.findOneOrFail(idHotel)];
                case 2:
                    hotel = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    res.status(404).send("Hotel not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, productRepository.findOneOrFail(id)];
                case 5:
                    product = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_9 = _a.sent();
                    res.status(404).send("Product not found");
                    return [2 /*return*/];
                case 7:
                    productRepository.delete(id);
                    res.status(205).send("Product deleted successfully");
                    return [2 /*return*/];
            }
        });
    }); };
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map