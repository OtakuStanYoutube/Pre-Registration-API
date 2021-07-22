import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  post: "465",
  secure: false,
  auth: {
    user: "apikey",
    pass: "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",
  },
});

export const mailUser = async (email) => {
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
