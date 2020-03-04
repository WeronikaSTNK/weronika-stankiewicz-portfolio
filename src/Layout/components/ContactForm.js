
import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {
        name: '',
        email: '',
        message: ''
      },
      messageStatus: '',
      color: ''
    }
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target
    const name = target.name
    const value = target.value
    this.setState({ [name]: value })
  }

  validateMail() {
    let errors = {}
    let formIsValid = true
    const lang = this.props.language

    if (!this.state.name || this.state.name.length < 3 || this.state.name.length > 25) {
      errors.name = lang === "pl" ? 'Imię powinno zawierać minimum 3 i maksymalnie 25 znaków' : 'Your name should be between 3 and 25 characters long'
      formIsValid = false
    }
    if (!this.state.message || this.state.message.length < 10 || this.state.message.length > 1000) {
      errors.message = lang === "pl" ? 'Wiadomość powinna zawierać od 10 do 1000 znaków' : 'Your message should consist between 10 and 1000 characters'
      formIsValid = false
    }
    if (!this.state.email || this.state.email.length < 3) {
      errors.email = lang === "pl" ? 'Email powinien składać się conajmniej z 3 znaków ' : 'Use minimum 3 symbols'
      formIsValid = false
    }
//regexp email
    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
      errors.email = lang === "pl" ? 'Niepoprawny' : 'Enter a valid email address'
      formIsValid = false
    }
    this.setState({
      errors
    })
    return formIsValid
  }

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  sentMessage = (e) => {
    e.preventDefault()
    if (!this.validateMail()) {
      return
    }

    const templateParams = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      auto_reply: this.props.language === "pl" ? 'Dziękuję za wiadomość' : 'Thank you for your message'
    }

    const successMessage = this.props.language === "pl" ? 'Wiadomość została wysłana' : 'Message send successful';

    const failMessage = this.props.language === "pl" ? 'Wysyłanie wiadomości nie powiodło się' : 'Failed to send the message';

    const sendingSuccessfully = () => {
      this.setState({
        messageStatus: successMessage,
        color: 'green'
      })

      setTimeout(() => {
        this.setState({ messageStatus: false })
      }, 3000)
    }

    const sendingFailed = () => {
      this.setState({
        messageStatus: failMessage,
        color: 'red'
      })

      setTimeout(() => {
        this.setState({ messageStatus: false })
      }, 3000)
    }
    emailjs.send('gmail', 'template_igc4o3aJ', templateParams, 'user_BayiJy60hGcj8YA4EPcyb')
      .then(function (res) {
        // SUCCESS
        sendingSuccessfully();
        console.log(successMessage, res.status, res.text)
      }, function (err) {

        //FAIL
        sendingFailed();
        console.log(err);
      })

    setTimeout(this.clearForm, 3000);

  }

  render() {
    const { your_name, your_email, your_message } = this.props.content;

    return (
      <form className='contactForm'>

        <label htmlFor="name">Twoje imię:</label>
        <input type="text" className="name" name="name" id="name"  required onChange={this.handleInputChange} value={this.state.name} />
        {this.state.errors.name ? <span className="error"> {this.state.errors.name}</span> : ""}
        <label htmlFor="email">Twój e-mail:</label>
        <input type="email" className="email" name="email" id="email"  required onChange={this.handleInputChange} value={this.state.email} />
        {this.state.errors.email ? <span className="error"> {this.state.errors.email}</span> : ""}
        <label htmlFor="message">Wiadomość:</label>
        <textarea className="message" name="message" id="message" cols="30" rows="8"  required onChange={this.handleInputChange} value={this.state.message}></textarea>
        {this.state.errors.message ? <span className="error"> {this.state.errors.message}</span> : ""}
        <button className="formButton" type="submit" onClick={this.sentMessage} >Wyślij</button>
        {this.state.messageStatus ? <span className={this.state.color}> {this.state.messageStatus}</span> : ""}
      </form>
    );
  }
}

export default ContactForm;
