"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculerNumberController = void 0;
const CheckDivisorPrimoNumberFacades_1 = __importDefault(require("../Facades/CheckDivisorPrimoNumberFacades"));
class CalculerNumberController {
    constructor() {
        this.calculate = (req, res) => {
            let { number } = req.query;
            let facadesNumbers = new CheckDivisorPrimoNumberFacades_1.default();
            let result = facadesNumbers.process(number);
            return res.status(200).json(result);
        };
    }
}
exports.CalculerNumberController = CalculerNumberController;
