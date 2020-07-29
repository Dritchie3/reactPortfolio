import React from "react";
import { Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./Experience.styles";
import { Element } from "react-scroll";
// Add these line to create dynamic image/info cards
// import { exp } from "../../configs/Experience.js";
// import ExperienceCard from "../ExperienceCard/ExperienceCard.component.jsx";

function Experience() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <CssBaseline />

      <Typography
        className={classes.title}
        variant="h2"
        display="block"
        align="center"
      >
        <Element name="experience">Work Experience</Element>        
      </Typography>
      <p>
          I am a serial entrepreneur with experience starting and operating 5 businesses. I love to learn! I started as a Sales Agent at American General Life and Accident Insurance Co. Then I took over R&S Computers. This was a VAR (value added resale) company focusing on computer hardware and solutions. This company’s focus was to research and provide turn-key and out of the box solutions to shipping companies world-wide. We were a Compaq service provider. This meant we were authorized for warranty repair of Compaq servers and systems. I became an MCSE (Microsoft Certified Software Engineer) for NT. This was a requirement to becoming a Compaq Engineer.{<br></br>}
      </p>
      <p>
          Next, Started DBRI Properties L.L.C.. This is a property holding company that’s focus was and still is to purchase properties to rent and hold to provide a housing solution. It taught me the systems to manage and operate within the housing rental markets.
      </p>
      <p>
          From there, I ran and operated the GlassDoctor of San Antonio L.L.C. This was a glass repair company that replaces or installs residential, industrial and auto glass. Although the industry was different then what I had previously done, I found that my skills from earlier businesses transferred very easily.
      </p>
      <p>
          Back issues forced me to change my focus. Loving the computer industry since I was very young it seemed the logical solution for my next work chapter. I completed the UTSA software development bootcamp. I have found it  to be so rewarding and fun. I love the satisfaction of completing a projects learning to find new ways to solve a problems. It has allowed me the challenge of learning new technologies and applying them to everyday problems. The best part, is that every day is a new challenge. I can’t wait to apply these skills to enable others to realize there business potential.
      </p>

      {/* <div className={classes.expContainer}>
        {exp.map(e => {
          return (
            <ExperienceCard
              title={e.title}
              desc={e.desc}
              date={e.date}
              img={e.img}
              key={e.title + "key"}
            />
          );
        })}
      </div> */}
    </React.Fragment>
  );
}

export default Experience;
