import express, { json } from "express";
import cors from "cors";

import { notFound, errorHandler } from "./middleware/error.js";
import { __prod__ } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: "*",
    maxAge: __prod__ ? 86400 : undefined,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: [
      "access-token",
      "refresh-token",
      "content-type",
      "content-length",
    ],
  }),
);

app.use(json());

app.set("trust proxy", 1);

app.use(notFound);
app.use(errorHandler);

if (!__prod__) {
  app.get("/", (_req, res) => {
    res.status(201).json({
      message: "Hello World",
    });
  });
}

export default app;
