import { v4 as uuidV4 } from "uuid";
import {
  getNotionDatabase,
  createNotionDatabase,
  getNotionDatabaseEntry,
} from "../util/notion.js";

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
      const { results } = await getNotionDatabaseEntry(email);

      if (results.length === 0) {
        const userId = uuidV4();
        const newUser = {
          ID: userId,
          email,
        };
        const database = await createNotionDatabase(newUser);

        if (database) {
          return res
            .status(200)
            .json({ status: true, message: "Successfully created the database", database });
        }
      } else {
        return res.status(401).json({ status: false, message: "User Already Exists" });
      }
    }
  } catch (error) {
    res.status(401).json({ status: false, message: "Something went wrong!!" });
  }
};
