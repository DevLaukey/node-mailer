const nodemailer = require("nodemailer");

exports.sendEmail = async () => {
  try {
    let transporter = nodemailer.createTransport({
      host: "outlook",
      port: 587,
      secure: false,
      auth: {
        user: "nicholasguantai@outlook.com",
        pass: "Nicholas@98",
      },
    });

    const message = {
      from: "nicholasguantai@outlook.com",
      to: "laukeymwaura@gmail.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!",
      html: "<h1>Sending Email using Node.js</h1>",
    };

    // message
    await transporter.sendMail();
  } catch (error) {}
};
