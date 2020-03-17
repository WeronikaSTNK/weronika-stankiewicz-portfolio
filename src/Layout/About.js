import * as React from 'react'
import   "../Styles/about.css";
import polandrock from "../images/polandrock.png";
import countToWoodstock from "./utils";
import PropTypes from 'prop-types';

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
About.propTypes = {
  about: PropTypes.string,
    introduction1: PropTypes.string,
    introduction2:PropTypes.string,
    woodstockCounter: PropTypes.string,
    additionalInfo: PropTypes.string,
}
export default About;
