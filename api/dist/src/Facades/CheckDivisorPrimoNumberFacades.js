"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsService_1 = __importDefault(require("../Services/UtilsService"));
class CheckDivisorPrimoNumberFacades {
    constructor() {
        this.numbersDivisor = [];
        this.numbersPrimo = [];
    }
    process(number) {
        let utils = new UtilsService_1.default();
        for (let i = number - 1; i >= 1; i--) {
            if (utils.checkNumberDivisor(number, i)) {
                this.numbersDivisor.push(i);
            }
            if (utils.checkNumberPrime(i)) {
                this.numbersPrimo.push(i);
            }
        }
        return {
            "divisor": this.numbersDivisor,
            "primo": this.numbersPrimo
        };
    }
}
exports.default = CheckDivisorPrimoNumberFacades;
