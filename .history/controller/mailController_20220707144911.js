const nodemailer = require("nodemailer");

exports.sendEmail = async () => { 
    try {
        
        let tranporter = nodemailer.createTransport({
          host: "outlook",
          port: 587,
          secure: false,
          auth: {
            user: "nicholasguantai@outlook.com",
            pass: "Nicholas@98",
          },
        });
        
        // message
        let message = await tranporter.sendMail({
            from: "nicholasguantai@outlook.com",
            to: "laukeymwaura@gmail.com",
            subject: "Sending Email using Node.js",
            text: "That was easy!",
            html: "<h1>Sending Email using Node.js</h1>",
        });
    } catch (error) {
        
    }
}