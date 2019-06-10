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
var bcrypt = require("bcryptjs");
var Booking_1 = require("./Booking");
var Comment_1 = require("./Comment");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.hashPassword = function () {
        this.password = bcrypt.hashSync(this.password, 8);
    };
    User.prototype.checkIfUnencryptedPasswordIsValid = function (unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 50),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 45),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(6, 45),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: "int" }),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, length: 50 }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], User.prototype, "bookingEnabled", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Booking_1.Booking; }, function (booking) { return booking.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "bookings", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Comment_1.Comment; }, function (comments) { return comments.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "comments", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    User = __decorate([
        typeorm_1.Entity(),
        typeorm_1.Unique(["username"])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map