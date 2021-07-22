import { v4 as uuidV4 } from "uuid";
import {
  getNotionDatabase,
  createNotionDatabase,
  getNotionDatabaseEntry,
} from "../util/notion.js";

import { mailUser } from "../util/sendEmail.js";

import { emailRegEx } from "../constants.js";

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
    if (email.match(emailRegEx)) {
      const { results } = await getNotionDatabaseEntry(email);

      if (results.length === 0) {
        const userId = uuidV4();
        const newUser = {
          ID: userId,
          email,
        };
        const database = await createNotionDatabase(newUser);

        if (database) {
          mailUser(email);

          return res.status(200).json({
            status: true,
            message: "Successfully created the database",
            database,
          });
        }
      } else {
        return res
          .status(401)
          .json({ status: false, message: "User Already Exists" });
      }
    } else {
      return res.status(401).json({ status: false, message: "Invalid Email" });
    }
  } catch (error) {
    res.status(401).json({ status: false, message: "Something went wrong!!" });
  }
};
