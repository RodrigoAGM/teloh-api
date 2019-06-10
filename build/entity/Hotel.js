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
var HotelOwner_1 = require("./HotelOwner");
var class_validator_1 = require("class-validator");
var Photo_1 = require("./Photo");
var Product_1 = require("./Product");
var Room_1 = require("./Room");
var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Hotel.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(2, 50),
        __metadata("design:type", String)
    ], Hotel.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(6, 15),
        __metadata("design:type", String)
    ], Hotel.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(10, 150),
        __metadata("design:type", String)
    ], Hotel.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, length: 45 }),
        __metadata("design:type", String)
    ], Hotel.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ width: 5, type: "decimal" }),
        __metadata("design:type", Number)
    ], Hotel.prototype, "rate", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(3, 45),
        __metadata("design:type", String)
    ], Hotel.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return HotelOwner_1.HotelOwner; }, function (hotelOwner) { return hotelOwner.hotels; }),
        __metadata("design:type", HotelOwner_1.HotelOwner)
    ], Hotel.prototype, "hotelOwner", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Photo_1.Photo; }, function (photo) { return photo.hotel; }),
        __metadata("design:type", Array)
    ], Hotel.prototype, "photos", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Product_1.Product; }, function (product) { return product.hotel; }),
        __metadata("design:type", Array)
    ], Hotel.prototype, "products", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Room_1.Room; }, function (room) { return room.hotel; }),
        __metadata("design:type", Array)
    ], Hotel.prototype, "rooms", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Hotel.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Hotel.prototype, "updatedAt", void 0);
    Hotel = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(["address"])
    ], Hotel);
    return Hotel;
}());
exports.Hotel = Hotel;
//# sourceMappingURL=Hotel.js.map