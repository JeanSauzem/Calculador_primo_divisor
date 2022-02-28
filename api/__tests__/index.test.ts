import request from "supertest";
const app= "http://localhost:3333"
describe("Calcular numero primo e seus divisores", () => {
    it("Enviando parametros vazio", () => {
       return request(app).get('/').expect(422)
    })

    it("Enviando parametro Correto", () => {
       return request(app).get('/?number=12').expect(200)
    })

    it("Rota não cadastrada", () => {
        return request(app).get('/sadas?number=12').expect(404)
    })
})