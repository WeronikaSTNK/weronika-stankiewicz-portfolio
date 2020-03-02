import React from "react";
import css from "../Style/about.css";
import polandrock from '../images/polandrock.png'
export const About = props => {
  const { about, introduction1, introduction2 } = props.content;

  const countToWoodstock = (year, month, day) => {
    const dateNow = new Date();
    const dateOfWoodstock = new Date(year, month, day);
    let diff = dateOfWoodstock.getTime() - dateNow.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days == 1) return "1 dzień";
    else return days + " dni";
  };

  return (
    <>
      <div className="aboutSection">
        <h3 className="aboutMe"> {about}</h3>
        <div className="introduction">
          <p className="aboutMeIntro">{introduction1} </p>
          <p className="aboutMeIntro">{introduction2} </p>
          <div className="woodstockWrapper">
            <div className="woodstock">
                        <img src = {polandrock} alt="PolandRock Festival" />
            <p> Do Festiwalu Zostało Tylko </p>
            <div><b> { countToWoodstock(2020, 7, 0)} !</b> </div>
            </div>



          </div>
        </div>
        {/* <Hobbies />  */}
      </div>
    </>
  );
};

export default About;
