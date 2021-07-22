import { getNotionDatabase } from "../util/notion.js";

export const getRegistrations = (_req, res) => {
  getNotionDatabase();

  //   if (database) {

  //   }
  res.status(200).json({ messge: "Successfully retrieved database" });
};
