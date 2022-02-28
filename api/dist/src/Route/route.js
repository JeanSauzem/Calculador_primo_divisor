"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CalculerNumberController_1 = require("../Controller/CalculerNumberController");
const CheckNumberMidleware_1 = __importDefault(require("../Middleware/CheckNumberMidleware"));
const route = express_1.default.Router({
    caseSensitive: true
});
route.get('/', CheckNumberMidleware_1.default, new CalculerNumberController_1.CalculerNumberController().calculate);
exports.default = route;
