import { getNotionDatabase } from "../util/notion.js";

export const getRegistration = (_req, res) => {
  getNotionDatabase();

  //   if (database) {

  //   }
  res.status(200).json({ messge: "Successfully retrieved database" });
};
