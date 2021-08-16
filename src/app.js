import express, { json } from "express";
import cors from "cors";

// Middlewares
import { notFound, errorHandler } from "./middleware/error.js";

// Routes
import { router as registrationRoutes } from "./routes/registration.js";

// Constants
import { __prod__ } from "./constants.js";

const app = express();

app.use(
  cors({
    origin: "*",
    maxAge: __prod__ ? 86400 : undefined,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: [
      "content-type",
      "content-length",
    ],
  }),
);

app.use(json());

app.set("trust proxy", 1);

if (!__prod__) {
  app.get("/", (_req, res) => {
    res.status(201).json({
      message: "Hello World from the Pre-registion API",
    });
  });
}

// Registration Routes
app.use("/api/v1/", registrationRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
