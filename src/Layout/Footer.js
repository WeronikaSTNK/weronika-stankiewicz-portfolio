import React from "react";
import css from "../Style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <p>
        Created with
        <FontAwesomeIcon icon={faHeart} />
      </p>
      <p> Weronika Stankiewicz &copy; 2020</p>
    </footer>
  );
};

export default Footer;
