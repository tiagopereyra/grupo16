const app = require("../../app");
const request = require("supertest")(app);
let token = "";

beforeAll(async () => {
 
})

describe("Testing peliculas", () =>{

    describe("Delete pelicula", () => {
        test("It should be with code 200", async () => {
        
                const response = await request.get("/");
                expect(response.statusCode).toBe(200)

            });
    })

})

afterAll(async () => {

})
