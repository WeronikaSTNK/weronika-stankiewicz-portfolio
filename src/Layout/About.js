import React from "react";
import css from "../Styles/about.css";
import polandrock from "../images/polandrock.png";
import countToWoodstock from "./utils";

export const About = props => {
  const {
    about,
    introduction1,
    introduction2,
    woodstockCounter,
    additionalInfo
  } = props.content;

  return (
    <>
      <div className="aboutSection" id="about">
        <h3 className="aboutMe"> {about}</h3>
        <div className="introduction">
          <p className="aboutMeIntro">{introduction1} </p>
                <p className="aboutMeIntro"> {additionalInfo}</p>
          <p className="aboutMeIntro">{introduction2} </p>
          <div className="woodstockWrapper">
            <div className="woodstock">
              <img src={polandrock} alt="PolandRock Festival" />
              <div className="counter"> {countToWoodstock(2020, 7, 0)} </div>
              <p> {woodstockCounter} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
