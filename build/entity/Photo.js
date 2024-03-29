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
var Hotel_1 = require("./Hotel");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Photo = /** @class */ (function () {
    function Photo() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Photo.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(15, 150),
        __metadata("design:type", String)
    ], Photo.prototype, "url", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, length: 150 }),
        __metadata("design:type", String)
    ], Photo.prototype, "description", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Hotel_1.Hotel; }, function (hotel) { return hotel.photos; }),
        __metadata("design:type", Hotel_1.Hotel)
    ], Photo.prototype, "hotel", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Photo.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Photo.prototype, "updatedAt", void 0);
    Photo = __decorate([
        typeorm_1.Entity()
    ], Photo);
    return Photo;
}());
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map