const nodemailer = require("nodemailer");
const creds = require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
const server = app.listen(PORT, console.log(`server started on ${PORT}`));

const transport = {
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    type: "OAuth2",
    user: creds.USER,

    clientId: creds.CLIENT_ID,
    clientSecret: creds.CLIENT_SECRET,
    refreshToken: creds.REFRESH_TOKEN,
    accessToken: creds.ACCESS_TOKEN
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is ready to take messages");
  }
});
app.get("/test", (req, res) => {
  console.log("test");
});
app.post("/sendmail", (req, res, next) => {
  console.log("test");
  const { name, email, subject, message } = req.body;
  const content = `name: ${name} /n email: ${email} /n subject: ${subject} /n message: ${message} `;

  const mail = {
    from: name,
    to: creds.EMAIL,
    subject: "New message from contact form in portfolio",
    text: content
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        error: true,
        errorMsg: err
      });
    } else {
      res.json({
        success: true
      });
      console.log("mail sent");
    }
  });
});
