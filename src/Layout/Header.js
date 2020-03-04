import React from "react";
import avatar from "../images/avatar.jpg";
import css from "../Style/main.css";
import ScrollButton from 'react-scroll-button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export const Header = () => {
  return (
    <header id="header">
      <div>
        <img src={avatar} alt="Logo" />
           <div className="socialMedia">
        <a href="https://github.com/WeronikaSTNK">
          <FontAwesomeIcon className="iconHeader" icon={faGithub} size="3x" />
        </a>
          <a href="https://www.linkedin.com/in/weronika-stankiewicz" >
          <FontAwesomeIcon className="iconHeader" icon={faLinkedin} size="3x" />
        </a>
      </div>
      </div>
      <section className="logoName">
        <h1>
          <div className="headerDarkName">Weronika Maria Stankiewicz</div>
        </h1>
        <h3>
          <div className="headerLightName">Junior  Frontend Developer </div>
        </h3>


      </section>
      <ScrollButton
      behavior={'smooth'}
                buttonBackgroundColor={'var(--dark-main-color)'}
                iconType={'arrow-up'}
                style= {{fontSize: '24px'}}
                targetId={"header"}/>
      <div className="scrollDown"></div>
    </header>
  );
};

export default Header;
