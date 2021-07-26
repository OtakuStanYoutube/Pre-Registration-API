import app from "../app";
import request from "supertest";

describe("POST /api/v1/registrations/create", () => {
  describe("given an email ", () => {
    test("should respond with a 200 status code", async () => {
      const res = await request(app).post("/api/v1/registrations/create").send({
        email: "test1@test.com",
      });

      expect(res.statusCode).toEqual(200);
    });

    test("should return a json response", async () => {
      const res = await request(app).post("/api/v1/registrations/create").send({
        email: "test2@test.com",
      });

      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });

    test("response should have a database property", async () => {
      const res = await request(app).post("/api/v1/registrations/create").send({
        email: "test3@test.com",
      });

      expect(res.body).toHaveProperty("database");
    });

    test("response should have a defined database", async () => {
      const res = await request(app).post("/api/v1/registrations/create").send({
        email: "test4@test.com",
      });

      expect(res.body.database).toBeDefined();
    });
  });
});