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
var Comment_1 = require("../entity/Comment");
var User_1 = require("../entity/User");
var Room_1 = require("../entity/Room");
var class_validator_1 = require("class-validator");
var CommentController = /** @class */ (function () {
    function CommentController() {
        this.commentRepository = typeorm_1.getRepository(Comment_1.Comment);
    }
    CommentController.listAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, comments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    return [4 /*yield*/, commentRepository.find()];
                case 1:
                    comments = _a.sent();
                    res.send(comments);
                    return [2 /*return*/];
            }
        });
    }); };
    CommentController.getOneById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, id, comment, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, commentRepository.findOneOrFail(id)];
                case 2:
                    comment = _a.sent();
                    res.send(comment);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    res.status(404).send("Comment not found");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    CommentController.listAllByUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, userRepository, idUser, user, error_2, comments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
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
                    error_2 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, commentRepository.find({ where: { user: user } })];
                case 5:
                    comments = _a.sent();
                    res.send(comments);
                    return [2 /*return*/];
            }
        });
    }); };
    CommentController.getOneByIdAndUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, userRepository, id, idUser, user, error_3, comment, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
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
                    error_3 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, commentRepository.findOneOrFail({ where: { user: user, id: id } })];
                case 5:
                    comment = _a.sent();
                    res.send(comment);
                    return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    res.status(404).send("Comment not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    CommentController.listAllByRoom = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, roomRepository, idRoom, room, error_5, comments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    roomRepository = typeorm_1.getRepository(Room_1.Room);
                    idRoom = req.params.idRoom;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, roomRepository.findOneOrFail(idRoom)];
                case 2:
                    room = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    res.status(404).send("Room not found");
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, commentRepository.find({ where: { room: room } })];
                case 5:
                    comments = _a.sent();
                    res.send(comments);
                    return [2 /*return*/];
            }
        });
    }); };
    CommentController.getOneByIdAndRoom = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, roomRepository, id, idRoom, room, error_6, comment, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    roomRepository = typeorm_1.getRepository(Room_1.Room);
                    id = req.params.id;
                    idRoom = req.params.idRoom;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, roomRepository.findOneOrFail(idRoom)];
                case 2:
                    room = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    res.status(404).send("Room not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, commentRepository.findOneOrFail({ where: { room: room, id: id } })];
                case 5:
                    comment = _a.sent();
                    res.send(comment);
                    return [3 /*break*/, 7];
                case 6:
                    error_7 = _a.sent();
                    res.status(404).send("Comment not found");
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    CommentController.save = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, userRepository, roomRepository, idUser, idRoom, _a, description, published, comment, user, error_8, room, error_9, errors, errors_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    roomRepository = typeorm_1.getRepository(Room_1.Room);
                    idUser = req.params.idUser;
                    idRoom = req.params.idRoom;
                    _a = req.body, description = _a.description, published = _a.published;
                    comment = new Comment_1.Comment();
                    comment.description = description;
                    comment.published = published;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _b.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    comment.user = user;
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, roomRepository.findOneOrFail(idRoom)];
                case 6:
                    room = _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    error_9 = _b.sent();
                    res.status(404).send("Room not found");
                    return [2 /*return*/];
                case 8:
                    comment.room = room;
                    return [4 /*yield*/, class_validator_1.validate(Comment_1.Comment)];
                case 9:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 10;
                case 10:
                    _b.trys.push([10, 12, , 13]);
                    return [4 /*yield*/, commentRepository.save(comment)];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 12:
                    errors_1 = _b.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 13:
                    res.status(201).send("Comment saved");
                    return [2 /*return*/];
            }
        });
    }); };
    CommentController.edit = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, userRepository, roomRepository, idUser, idRoom, id, _a, description, published, user, error_10, room, error_11, comment, error_12, errors, errors_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    roomRepository = typeorm_1.getRepository(Room_1.Room);
                    idUser = req.params.idUser;
                    idRoom = req.params.idRoom;
                    id = req.params.id;
                    _a = req.body, description = _a.description, published = _a.published;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_10 = _b.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, roomRepository.findOneOrFail(idRoom)];
                case 5:
                    room = _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_11 = _b.sent();
                    res.status(404).send("Room not found");
                    return [2 /*return*/];
                case 7:
                    _b.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, commentRepository.findOneOrFail(id)];
                case 8:
                    comment = _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    error_12 = _b.sent();
                    res.status(404).send("Comment not found");
                    return [2 /*return*/];
                case 10:
                    comment.description = description;
                    comment.published = published;
                    comment.user = user;
                    comment.room = room;
                    return [4 /*yield*/, class_validator_1.validate(comment)];
                case 11:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 12;
                case 12:
                    _b.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, commentRepository.save(comment)];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 15];
                case 14:
                    errors_2 = _b.sent();
                    res.status(409).send("Something went wrong");
                    return [2 /*return*/];
                case 15:
                    res.status(201).send("Comment edited");
                    return [2 /*return*/];
            }
        });
    }); };
    CommentController.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var commentRepository, userRepository, roomRepository, idUser, idRoom, id, user, error_13, room, error_14, comment, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commentRepository = typeorm_1.getRepository(Comment_1.Comment);
                    userRepository = typeorm_1.getRepository(User_1.User);
                    roomRepository = typeorm_1.getRepository(Room_1.Room);
                    idUser = req.params.idUser;
                    idRoom = req.params.idRoom;
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userRepository.findOneOrFail(idUser)];
                case 2:
                    user = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_13 = _a.sent();
                    res.status(404).send("User not found");
                    return [2 /*return*/];
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, roomRepository.findOneOrFail(idRoom)];
                case 5:
                    room = _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_14 = _a.sent();
                    res.status(404).send("Room not found");
                    return [2 /*return*/];
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, commentRepository.findOneOrFail(id)];
                case 8:
                    comment = _a.sent();
                    return [3 /*break*/, 10];
                case 9:
                    error_15 = _a.sent();
                    res.status(404).send("Comment not found");
                    return [2 /*return*/];
                case 10:
                    commentRepository.delete(id);
                    res.status(205).send("Comment deleted successfully");
                    return [2 /*return*/];
            }
        });
    }); };
    return CommentController;
}());
exports.CommentController = CommentController;
//# sourceMappingURL=CommentController.js.map