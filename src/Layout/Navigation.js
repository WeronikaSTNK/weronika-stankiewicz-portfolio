import * as React from "react";
import ScrollIntoView from "react-scroll-into-view";
import content from "../content.json";
import "../Styles/navigation.css";
export const Navigation = props => {
  const { navigationHandler, langHandler, language, scrollY } = props;
  const { about, contact, home } = props.content;

  return (
    <div className="navigation">
      <div className="navigationBurger">
        <span className="navigationBurgerSpan" />
        <span className="navigationBurgerSpan" />
        <span className="navigationBurgerSpan" />
        <span className="navigationBurgerSpan" />
        <nav>
          <div className="languageOptions">
            <button
              className={
                language === "pl"
                  ? "navigationButton current"
                  : "navigationButton"
              }
              value="pl"
              onClick={langHandler}
            >
              PL
            </button>
            /
            <button
              className={
                language === "en"
                  ? "navigationButton current"
                  : "navigationButton"
              }
              value="en"
              onClick={langHandler}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
      <ul className="navigationList">
        <li className="navigationItem" onClick={navigationHandler}>
          <ScrollIntoView selector="header">
            <button className="navigationListButton mdl-button mdl-js-button mdl-button--raised">
              {home}
            </button>
          </ScrollIntoView>
        </li>
        <li className="navigationItem" onClick={navigationHandler}>
          <ScrollIntoView selector=".aboutSection">
            <button className="navigationListButton mdl-button mdl-js-button mdl-button--raised">
              {about}
            </button>
          </ScrollIntoView>
        </li>
        <li className="navigationItem" onClick={navigationHandler}>
          <ScrollIntoView selector=".contactSection">
            <button className="navigationListButton mdl-button mdl-js-button mdl-button--raised">
              {contact}
            </button>
          </ScrollIntoView>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
