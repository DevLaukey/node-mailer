const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "outlook",

      auth: {
        user: "devlaukey@outlook.com",
        pass: "mburu.2924",
      },
    });

    let content =
      "BEGIN:VCALENDAR\r\nPRODID:-//ACME/DesktopCalendar//EN\r\nMETHOD:REQUEST\r\n...";

    let message = {
      from: "devlaukey@outlook.com",
      to: "devlaukeymwaura@gmail.com",
      subject: "Appointment",
      text: "Please see the attached appointment",
      icalEvent: {
        filename: "invitation.ics",
        method: "request",
        content: content,
      },
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
