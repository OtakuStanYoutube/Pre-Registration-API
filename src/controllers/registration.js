import { getNotionDatabase } from "../util/notion.js";

export const getRegistrations = async (_req, res) => {
  const database = await getNotionDatabase();

  if (database) {
    res
      .status(200)
      .json({ message: "Successfully retrieved the database", database });
  }
};
