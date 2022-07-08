const nodemailer = require("nodemailer");

let tranporter = nodemailer.createTransport({
  host: "outlook",
  port: 587,
  secure: false,
  auth: {
    user: "nicholasguantai@outlook.com",
    pass: "Nicholas@98",
  },
});
