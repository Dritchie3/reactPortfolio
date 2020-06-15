const express = require("express");
const favicon = require('express-favicon');

const app = express();

const PORT = process.env.PORT || 3001;


app.use(favicon(__dirname + 'client/src/assets/self_photo.jpg'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});






// const express = require('express');
// const favicon = require('express-favicon');
// const path = require('path');
// const port = process.env.PORT || 3001;
// const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.listen(port);




// const express = require('express');
// const favicon = require('express-favicon');
// const logger = require("morgan");
// const path = require('path');
// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(favicon(__dirname + '/build/favicon.ico'));
// app.use(logger("dev"));
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"));
// }

// app.get('/', function(req, res){
//   res.sendFile(__dirname+'../src/utils/index.js'); // change the path to your index.html
// });

// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, '../public/index.js')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// // app.get('/*', function (req, res) {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });

// app.listen(PORT, () => {
//     console.log(`App running on https://localhost/${PORT} !`)
// });







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






