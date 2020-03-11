import * as React from "react";
import ScrollIntoView from "react-scroll-into-view";
import content from "../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Styles/navigation.css";
export const Navigation = props => {
  const {
    langHandler,
    language,
    navigationToggle,
    scrollY
  } = props;
  const { about, contact, home } = props.content;

  return (
    <div className="navigation">
      <nav className="navbar" onClick={navigationToggle}>
        <span className="navbar-toggle" id="toggle">
          <FontAwesomeIcon icon={faBars} size="xs" />
        </span>
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
        <ul className="main-nav" id="menu">
          <li className="nav-links" onClick={navigationToggle}>
            <ScrollIntoView selector="header">
              <button className="navigationListButton " id="btn">
                {home}
              </button>
            </ScrollIntoView>
          </li>
          <li className="nav-links" onClick={navigationToggle}>
            <ScrollIntoView selector=".aboutSection">
              <button className="navigationListButton">
                {about}
              </button>
            </ScrollIntoView>
          </li>

          <li className="nav-links" onClick={navigationToggle}>
            <ScrollIntoView selector=".contactSection">
              <button className="navigationListButton">
                {contact}
              </button>
            </ScrollIntoView>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
