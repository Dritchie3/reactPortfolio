const express = require("express");
const favicon = require('express-favicon');
const path = require('path');
const PORT = process.env.PORT || 3002;
const app = express();




app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/contact', function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  
  var mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// console.log(`--------------before ${production} ----------------`);
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
// });
// console.log(`--------------after ${production} ----------------`);
// app.use('/', express.static(path.join(__dirname, 'build/index.html')))
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build/index.html"));
// }
// Add routes, both API and view
// app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



// this code will allow for email to be sent to me.

// const nodemailer = require('nodemailer');
// require("dotenv").config();

// let transporter = nodemailer.createTransport({
//   service: 'yahoo',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });
// let mailOptions = {
//   from: "",
//   to: "",
//   subject: "Testing and Testing",
//   text: "It Works"
// }

// // transporter.sendMail(mailOptions, function(err, data) {
// //   if (err) {
// //     console.log('error Occurs', err);
// //   } else {
// //     console.log('Email sent! ');
// //   }
// // });

// transporter.sendMail(mailOptions)
//   .then(function(res) {
//     console.log('Email Sent!');
//   })
//   .catch(function(error) {
//     console.log('Error: ', error )
//   })






