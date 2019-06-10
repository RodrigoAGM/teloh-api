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
var Product_Booking_1 = require("./Product_Booking");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(2, 50),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(3, 150),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ type: "decimal" }),
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(15, 150),
        __metadata("design:type", String)
    ], Product.prototype, "imgUrl", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], Product.prototype, "stock", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Hotel_1.Hotel; }, function (hotel) { return hotel.products; }),
        __metadata("design:type", Hotel_1.Hotel)
    ], Product.prototype, "hotel", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_Booking_1.Product_Booking; }, function (pb) { return pb.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "bookingConnection", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Product.prototype, "updatedAt", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map