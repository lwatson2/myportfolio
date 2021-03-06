const nodemailer = require("nodemailer");
//const creds = require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
const server = app.listen(PORT, console.log(`server started on ${PORT}`));

//Config for production

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/clientSide/build"));
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/clientSide/build/index.html"));
  });
}

const transport = {
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.USER, //|| creds.USER,
    clientId: process.env.CLIENT_ID, // || creds.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET, // || creds.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN, // || creds.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN // || creds.ACCESS_TOKEN
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

app.post("/sendmail", (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const content = `name: ${name}  email: ${email}  subject: ${subject} message: ${message} `;

  const mail = {
    from: name,
    to: process.env.EMAIL, // || creds.EMAIL,
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
    }
  });
});
