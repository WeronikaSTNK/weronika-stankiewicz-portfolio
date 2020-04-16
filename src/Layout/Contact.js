import * as React from 'react'
import  "../Styles/main.css";
import content from "../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./components/ContactForm";
import PropTypes from 'prop-types';

export const Contact = props => {
  const { contact, send_me_a_message } = props.content;
  return (
    <div className="contactSection">
      <h3> {contact}</h3>
      <div className="socialMedia">
        <a href="https://github.com/WeronikaSTNK">
          <FontAwesomeIcon className="iconHeader" icon={faGithub} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/weronika-stankiewicz">
          <FontAwesomeIcon className="iconHeader" icon={faLinkedin} size="3x" />
        </a>
      </div>
      <div className="contactFormWrapper">
        <p className="sendMeAMessage"> {send_me_a_message}</p>
        <ContactForm
          id="mainContactForm"
          className="contactForm"
          name="contactForm"
          method="post"
          action=""
          content={props.content}
          language={props.content.language}
        />
      </div>
    </div>
  );
};
Contact.propTypes = {
  contact: PropTypes.string,
  send_me_a_message: PropTypes.string
}

export default Contact;
