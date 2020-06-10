import React from "react";
import portfolio from "../../utils/portfolio.png";
import { Typography } from "@material-ui/core";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Douglas Ritchie</h1>
        <div className="subtitle">
          <br></br>
          <br></br>
          <h3>I am a Full stack web developer. I give life to designs!</h3>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
