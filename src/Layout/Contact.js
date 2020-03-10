import * as React from 'react'
import  "../Styles/main.css";
import content from "../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./components/ContactForm";
// import ContactFormHooks from "./components/ContactFormHooks";

export const Contact = props => {
  const { contact, send_me_a_message, your_name } = props.content;
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

        {/* <ContactFormHooks id="mainContactForm" className="contactForm" name="contactForm" method="post" action="" content={content} language={content.language}/> */}

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

export default Contact;
