const { app, server } = require("..");
const { getProducts } = require("../controllers/getProducts");
const supertest = require("supertest");

describe("Unit test for products", () => {
  afterAll((done) => {
    server.close(done);
  });

  it("List the products", async () => {
    const res = await supertest(app).get("/");

    // console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toContain("mac");
  });

  it("Post products", async () => {
    const item = "redmi";
    const res = await supertest(app).post("/").send({ item });

    // console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toContain(item);
  });
});
