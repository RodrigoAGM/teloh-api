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
var Room_1 = require("./Room");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Booking_1 = require("./Booking");
var BookPeriod = /** @class */ (function () {
    function BookPeriod() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], BookPeriod.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "int", width: 24 }),
        __metadata("design:type", Number)
    ], BookPeriod.prototype, "duration", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        class_validator_1.Length(5, 45),
        __metadata("design:type", String)
    ], BookPeriod.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ type: "decimal" }),
        __metadata("design:type", Number)
    ], BookPeriod.prototype, "price", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Room_1.Room; }, function (room) { return room.bookPeriods; }),
        __metadata("design:type", Room_1.Room)
    ], BookPeriod.prototype, "room", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Booking_1.Booking; }, function (booking) { return booking.bookPeriod; }),
        __metadata("design:type", Array)
    ], BookPeriod.prototype, "bookings", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], BookPeriod.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], BookPeriod.prototype, "updatedAt", void 0);
    BookPeriod = __decorate([
        typeorm_1.Entity()
    ], BookPeriod);
    return BookPeriod;
}());
exports.BookPeriod = BookPeriod;
//# sourceMappingURL=BookPeriod.js.map