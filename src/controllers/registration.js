import { v4 as uuidV4 } from "uuid";
import { getNotionDatabase, createNotionDatabase } from "../util/notion.js";

export const getRegistrations = async (_req, res) => {
  const database = await getNotionDatabase();

  if (database) {
    res
      .status(200)
      .json({ message: "Successfully retrieved the database", database });
  }
};

export const createRegistration = async (req, res) => {
  const { email } = req.body;

  try {
    if (email) {
      const userId = uuidV4();
      const newUser = {
        ID: userId,
        email,
      };
      const database = await createNotionDatabase(newUser);

      if (database) {
        res
          .status(200)
          .json({ message: "Successfully created the database", database });
      }
    }
  } catch (error) {
    res.status(401).json({ status: false, message: "Something went wrong!!" });
  }
};
