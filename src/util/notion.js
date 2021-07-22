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
        rich_text: [
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

  return response;
};

export const getNotionDatabaseEntry = async (email) => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  try {
    const userPage = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter: {
        property: "Email",
        text: {
          equals: email,
        },
      },
    });

    return userPage;
  } catch (error) {
    console.error(error);
  }
};
