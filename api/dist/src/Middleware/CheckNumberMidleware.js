"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Middleware = express_1.default.Router();
Middleware.use((req, res, next) => {
    let { number } = req.query;
    if (number == undefined) {
        return res.status(422).json({ "message": "Obrigado Informar o número" });
    }
    next();
});
exports.default = Middleware;
