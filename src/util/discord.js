import fetch from "node-fetch";

export const sendDiscordMessage = async (email) => {
  const body = {
    content: `Hurray!! An idiot ${email} registered with LinkedList`,
  };

  try {
    const response = await fetch(
      "https://discord.com/api/webhooks/867744066761392159/TVDmuzBFqNo9EZBtbt9Tw0aOvoXWBwEM0fFHt1nkheDWwQL30RszXUXCgIcA2YJ52aZY",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      },
    );

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};
