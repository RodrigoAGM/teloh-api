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
var Product_1 = require("./Product");
var Booking_1 = require("./Booking");
var Product_Booking = /** @class */ (function () {
    function Product_Booking() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Product_Booking.prototype, "bookingId", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Product_Booking.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Product_Booking.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Booking_1.Booking; }, function (booking) { return booking.productConnection; }, { primary: true }),
        typeorm_1.JoinColumn({ name: "bookingId" }),
        __metadata("design:type", Booking_1.Booking)
    ], Product_Booking.prototype, "booking", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.Product; }, function (product) { return product.bookingConnection; }, { primary: true }),
        typeorm_1.JoinColumn({ name: "productId" }),
        __metadata("design:type", Product_1.Product)
    ], Product_Booking.prototype, "product", void 0);
    Product_Booking = __decorate([
        typeorm_1.Entity()
    ], Product_Booking);
    return Product_Booking;
}());
exports.Product_Booking = Product_Booking;
//# sourceMappingURL=Product_Booking.js.map