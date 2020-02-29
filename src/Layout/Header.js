import React from "react";
import avatar from "../images/avatar.jpg";
import css from "../Style/main.css";
export const Header = () => {
  return (
    <header>
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
      <div className="scrollDown"></div>
    </header>
  );
};

export default Header;
