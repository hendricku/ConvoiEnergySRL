
const nodemailer = require("nodemailer");

const email = `Beyond Digital <${process.env.EMAIL_USER}>`;
const emailTo = process.env.EMAIL_TO;

export const transporter = nodemailer.createTransport({
  host: "bynddigital.co",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: emailTo,
};