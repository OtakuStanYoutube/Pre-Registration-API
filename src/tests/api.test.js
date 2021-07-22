import app from "../app";
import request from "supertest";

describe("testing get Api endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(201);
    expect(res.headers["content-type"]).toEqual(
      expect.stringContaining("json"),
    );
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBeDefined();
  });
});
