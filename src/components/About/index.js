import React from "react";
import NavigationButton from "../NavigationButton";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const About = () => (
  <div className="App">
    <NavigationButton route="/" label="home" />
    <Title>This site is under construction ...</Title>
    <p>
      This site is powered by{" "}
      <a
        className={"prettyLink"}
        href={"https://openweathermap.org/"}
        target={"_blank"}
        rel={"noopenner noreferrer"}
      >
        OpenWeatherMap
      </a>
      .
    </p>
    <p>
      I'm Thea. I believe many of life's problems are solved by dressing for the
      weather.
    </p>
    <p>
      Many thanks to{" "}
      <a
        className={"prettyLink"}
        href={"https://openweathermap.org/"}
        target={"_blank"}
        rel={"noopenner noreferrer"}
      >
        Thomas Nickels
      </a>{" "}
      for leading the General Assembly React Development course for which this
      app is my final project. And to my fellow classmates. It's been awesome!
    </p>
    <p>
      If you have questions, want to provide feedback, or feel like a chat I'm
      at{" "}
      <a
        className={"prettyLink"}
        href={"https://openweathermap.org/"}
        target={"_blank"}
        rel={"noopenner noreferrer"}
      >
        theakalise@gmail.com
      </a>
      .
    </p>
  </div>
);

export default About;
