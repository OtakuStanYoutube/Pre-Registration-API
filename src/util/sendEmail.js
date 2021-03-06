import nodemailer from "nodemailer";
import { emailTemplate } from "../lib/emailTemplate.js";

export const mailUser = async (email) => {
  const mailTemplate = emailTemplate();
  const transporter = nodemailer.createTransport({
    service: "SendinBlue",
    port: "465",
    auth: {
      user: process.env.EMAIL_AUTH,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "lnkedlst@gmail.com",
    to: email,
    subject: "LinkedLyst Registration",
    html: mailTemplate,
  };

  await transporter.sendMail(mailOptions, (error, message) => {
    if (error) {
      console.log(error);
    } else {
      console.log(message);
    }
  });
};
