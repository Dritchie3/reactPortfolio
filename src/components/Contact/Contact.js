import React from "react";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Element } from "react-scroll";
import "./Contact.css";
const nodemailer = require('nodemailer');

// const nodemailer = require('nodemailer');
require("dotenv").config();

// let testAccount = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    host: 'smtp.att.yahoo.com',
    port: 465,
    secure: true,
    auth: {
       user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// await transporter.sendMail({
//   from: '"Fred Foo 👻" <foo@example.com>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });


var mailOptions = {
    from: 'dritchie3@sbcglobal.net',
    to: 'dritchie3@sbcglobal.net',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>'
};

let info = transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
    transporter.close();
});



// console.log("Message sent: %s", info.messageId);

// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));



export default function ContactForm() {
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const resetForm = () => {
      document.getElementById("contact-form").reset();
    };

    

       console.log(name + ', ' + email +', '+ message) 
    // let transporter = nodemailer.createTransport({
    //   service: 'yahoo',
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD
    //   }
    /*  let headers = new Headers();
    headers.append(
      "Access-Control-Allow-Origin",
      "http://localhost:3002/email"
    );
    headers.append("Access-Control-Allow-Credentials", "true"); */

    axios({
      method: "POST",
      url: process.env.EMAIL,
      // pass: process.env.PASSWORD,
      data: {
        name: name,
        email: email,
        message: message
      }
    /* , headers: headers */
    }).then(response => {
      console.log("response:", response);
      if (response.data.message === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive'
        }}
      >
        <Element name="contact-me">Contact Me</Element>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <form
          onSubmit={e => handleSubmit(e)}
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          <TextField
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            id="name"
            placeholder="Enter your name"
          />
          <TextField
            label="Email"
            type="email"
            id="email"
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField
            label="Message"
            id="message"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
              Send
            </Button>
          </div>
        </form>
        
      </div>
    </React.Fragment>
  );
}
