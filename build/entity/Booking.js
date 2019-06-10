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
var class_validator_1 = require("class-validator");
var User_1 = require("./User");
var BookPeriod_1 = require("./BookPeriod");
var Product_Booking_1 = require("./Product_Booking");
var Booking = /** @class */ (function () {
    function Booking() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Booking.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(5, 50),
        __metadata("design:type", String)
    ], Booking.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Booking.prototype, "active", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_Booking_1.Product_Booking; }, function (pb) { return pb.booking; }),
        __metadata("design:type", Array)
    ], Booking.prototype, "productConnection", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.bookings; }),
        __metadata("design:type", User_1.User)
    ], Booking.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return BookPeriod_1.BookPeriod; }, function (bookPeriod) { return bookPeriod.bookings; }),
        __metadata("design:type", BookPeriod_1.BookPeriod)
    ], Booking.prototype, "bookPeriod", void 0);
    Booking = __decorate([
        typeorm_1.Entity()
    ], Booking);
    return Booking;
}());
exports.Booking = Booking;
//# sourceMappingURL=Booking.js.map