import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getNotionDatabase = async () => {
  const response = await notion.databases.retrieve({
    database_id: process.env.DATABASE_ID,
  });

  console.log("Recieved Response from Notion")
  console.log(response);
};
