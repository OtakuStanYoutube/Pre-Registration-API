import { Client } from "@notionhq/client";

export const getNotionDatabase = async () => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  const response = await notion.databases.retrieve({
    database_id: process.env.DATABASE_ID,
  });

  console.log("Recieved Response from Notion");
  console.log(response);

  return response;
};

export const createNotionDatabase = async ({ ID, email }) => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const response = await notion.pages.create({
    parent: {
      database_id: process.env.DATABASE_ID,
    },
    properties: {
      [process.env.NOTION_USER_ID]: {
        title: [
          {
            type: "text",
            text: {
              content: ID,
            },
          },
        ],
      },
      [process.env.NOTION_USER_EMAIL]: {
        email: [
          {
            type: "text",
            text: {
              content: email,
            },
          },
        ],
      },
    },
  });

  console.log("Sucessfully created the user");
  console.log(response);

  return response;
};
