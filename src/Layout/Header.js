import React from "react";
import avatar from "../images/avatar.jpg";
import css from "../Style/main.css";
import ScrollButton from 'react-scroll-button'


export const Header = () => {
  return (
    <header id="header">
      <div>
        <img src={avatar} alt="Logo" />
      </div>
      <section className="logoName">
        <h1>
          <div className="headerDarkName">Weronika Maria Stankiewicz</div>
        </h1>
        <h3>
          <div className="headerLightName"> Frontend Developer </div>
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
