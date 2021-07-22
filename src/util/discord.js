import fetch from "node-fetch";

export const sendDiscordMessage = async (email) => {
  const body = {
    content: `Hurray!! An idiot\n > ${email}\n registered with LinkedList`,
  };

  try {
    const response = await fetch(process.env.DISCORD_URI, {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
