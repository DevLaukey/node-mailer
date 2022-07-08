const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "outlook",
      port: 587,
      secure: false,
      auth: {
        user: "devlaukeymwaura@outlook.com",
        pass: "Nicholas@98",
      },
    });

    const message = {
      from: "devlaukeymwaura@outlook.com",
      to: "devlaukeymwaura@gmail.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!",
      html: "<h1>Sending Email using Node.js</h1>",
    };

    // message
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log( "email sent: ", info);
      res.send(info);
    });
  } catch (error) {
      console.log('error', error)
  }
};
