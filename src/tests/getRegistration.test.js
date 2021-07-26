import app from "../app";
import request from "supertest";

describe("GET /api/v1/registrations", () => {
  describe("given an email ", () => {
    test("should respond with a 200 status code", async () => {
      const res = await request(app).get("/api/v1/registrations").

      expect(res.statusCode).toEqual(200);
    });

    test("should return a json response", async () => {
      const res = await request(app).get("/api/v1/registrations")

      expect(res.headers["content-type"]).toEqual(
        expect.stringContaining("json"),
      );
    });

    test("response should have a database property", async () => {
      const res = await request(app).get("/api/v1/registrations")

      expect(res.body).toHaveProperty("database");
    });

    test("response should have a defined database", async () => {
      const res = await request(app).get("/api/v1/registrations")

      expect(res.body.database).toBeDefined();
    });
  });
});