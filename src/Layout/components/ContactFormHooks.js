import React, { Component, useState } from "react";
import * as emailjs from "emailjs-com";
import content from "./../../content";

export const ContactFormHooks = props => {
  const {
  language
  } = props.content;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    errorsName: "",
    errorsEmail: "",
    errorsMessage: ""
  });
  const [messageStatus, setMessageStatus] = useState("");
  const [color, setColor] = useState("");

  const handleInputChange = e => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setName(  value );
  };

  const validateMail = () => {
    let errors = {};
    let formIsValid = true;
    const lang = language;

    if (!name || name.length < 3 || name.length > 25) {
      errors.name =
        lang === "pl"
          ? "Imię powinno zawierać minimum 3 i maksymalnie 25 znaków"
          : "Your name should be between 3 and 25 characters long";
      formIsValid = false;
    }
    if (!message || message.length < 10 || message.length > 1000) {
      errors.message =
        lang === "pl"
          ? "Wiadomość powinna zawierać od 10 do 1000 znaków"
          : "Your message should consist between 10 and 1000 characters";
      formIsValid = false;
    }
    if (!email || email.length < 3) {
      errors.email =
        lang === "pl"
          ? "Email powinien składać się conajmniej z 3 znaków "
          : "Use minimum 3 symbols";
      formIsValid = false;
    }

    //regexp email
    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(email)) {
      errors.email =
        lang === "pl"
          ? "Niepoprawny adres email"
          : "Enter a valid email address";
      formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sentMessage = e => {
    e.preventDefault();
    if (!validateMail()) {
      return;
    }
    const templateParams = {
      name: name, //state
      email: email,
      message: message,
      auto_reply:
        language === "pl"
          ? "Dziękuję za wiadomość"
          : "Thank you for your message"
    };

    const successMessage =
      language === "pl"
        ? "Wiadomość została wysłana"
        : "Message send successful";

    const failMessage =
      language === "pl"
        ? "Wysyłanie wiadomości nie powiodło się"
        : "Failed to send the message";

    const sendingSuccessfully = () => {
      setMessageStatus(successMessage);
      setColor("green");
      setTimeout(() => {
        setMessageStatus({ messageStatus: false });
      }, 3000);
    };

    const sendingFailed = () => {
      setMessage(failMessage);
      setColor("red");
      setTimeout(() => {
        setMessageStatus({ messageStatus: false });
      }, 3000);
    };

    emailjs
      .send(
        "gmail",
        "template_igc4o3aJ",
        templateParams,
        "user_BayiJy60hGcj8YA4EPcyb"
      )
      .then(
        function(res) {
          // SUCCESS
          sendingSuccessfully();
          console.log(successMessage, res.status, res.text);
        },
        function(err) {
          //FAIL
          sendingFailed();
          console.log(err);
        }
      );

    setTimeout(clearForm, 3000);
  };

  return (
    <form className="contactForm">
      <label htmlFor="name">Twoje imię:</label>
      <input
        type="text"
        className="name"
        name="name"
        id="name"
        required
        onChange={handleInputChange}
        value={name}
      />
      {errors.name ? (
        <span className="error"> {errors.name}</span>
      ) : (
        ""
      )}
      <label htmlFor="email">Twój e-mail:</label>
      <input
        type="email"
        className="email"
        name="email"
        id="email"
        required
        onChange={handleInputChange}
        value={email}
      />
      {errors.email ? (
        <span className="error"> {errors.email}</span>
      ) : (
        ""
      )}
      <label htmlFor="message">Wiadomość:</label>
      <textarea
        className="message"
        name="message"
        id="message"
        cols="30"
        rows="8"
        required
        onChange={handleInputChange}
        value={message}
      ></textarea>
      {errors.message ? (
        <span className="error"> {errors.message}</span>
      ) : (
        ""
      )}
      <button className="formButton" type="submit" onClick={sentMessage}>
        Wyślij
      </button>
      {messageStatus ? (
        <span className={color}> {messageStatus}</span>
      ) : (
        ""
      )}
    </form>
  );
};

export default ContactFormHooks;
