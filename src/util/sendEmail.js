import nodemailer from "nodemailer";

export const mailUser = async (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    post: "465",
    secure: false,
    auth: {
      user: process.env.EMAIL_AUTH,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "redlolicon99@gmail.com",
    to: email,
    subject: "Account Verification",
    html: ``,
  };

  await transporter.sendMail(mailOptions, (error, message) => {
    if (error) {
      console.log(error);
    } else {
      console.log(message);
    }
  });
};
