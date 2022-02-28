"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app = "http://localhost:3333";
describe("Calcular numero primo e seus divisores", () => {
    it("Enviando parametros vazio", () => {
        return (0, supertest_1.default)(app).get('/').expect(422);
    });
    it("Enviando parametro Correto", () => {
        return (0, supertest_1.default)(app).get('/?number=12').expect(200);
    });
    it("Rota não cadastrada", () => {
        return (0, supertest_1.default)(app).get('/sadas?number=12').expect(404);
    });
});
