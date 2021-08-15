import nodemailer from "nodemailer";
import { emailTemplate } from "../lib/emailTemplate.js";

export const mailUser = async (email) => {
  const mailTemplate = emailTemplate();
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: "465",
    secure: true,
    auth: {
      user: process.env.EMAIL_AUTH,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "lnkedlst@gmail.com",
    to: email,
    subject: "Account Verification",
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
