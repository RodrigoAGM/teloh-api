"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Hotel_1 = require("./Hotel");
var class_validator_1 = require("class-validator");
var BookPeriod_1 = require("./BookPeriod");
var Comment_1 = require("./Comment");
var Room = /** @class */ (function () {
    function Room() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Room.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(5, 150),
        __metadata("design:type", String)
    ], Room.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(5, 50),
        __metadata("design:type", String)
    ], Room.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Room.prototype, "smoking", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Room.prototype, "available", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Hotel_1.Hotel; }, function (hotel) { return hotel.rooms; }),
        __metadata("design:type", Hotel_1.Hotel)
    ], Room.prototype, "hotel", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return BookPeriod_1.BookPeriod; }, function (bookPeriod) { return bookPeriod.room; }),
        __metadata("design:type", Array)
    ], Room.prototype, "bookPeriods", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Comment_1.Comment; }, function (comment) { return comment.room; }),
        __metadata("design:type", Array)
    ], Room.prototype, "comments", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Room.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Room.prototype, "updatedAt", void 0);
    Room = __decorate([
        typeorm_1.Entity()
    ], Room);
    return Room;
}());
exports.Room = Room;
//# sourceMappingURL=Room.js.map