"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilServices {
    constructor() {
        this.checkNumberDivisor = (number, divisor) => {
            return number % divisor == 0;
        };
        this.checkNumberPrime = (number) => {
            let count = 0;
            for (let i = number; i > 0; i--) {
                if (number % 2 == 0) {
                    count++;
                }
                if (count > 2) {
                    return false;
                }
            }
            return true;
        };
    }
}
exports.default = UtilServices;
