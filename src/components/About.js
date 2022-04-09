import React from "react";

function About(props) {
  const userBioExists = props.bio

  if (!userBioExists || userBioExists === "") {
    return (
      <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
    );
    } else {
      return (
        <div id="about">
          <h2>About Me</h2>
          <p>{ props.bio }</p>
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
    );
  }
}

export default About;
