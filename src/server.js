import { config } from "dotenv";
config();

import app from "./app.js";

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started in ${ENV} on port ${PORT}`);
});
