import React from "react";
import css from "../Styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <p>
        Created with
        <FontAwesomeIcon icon={faHeart} />
      </p>
      <p> weronika.stankiewicz94@gmail.com &copy;  2020</p>
    </footer>
  );
};

export default Footer;
