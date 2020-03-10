import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import content from "../content.json";
import Footer from "./Footer";
import Skills from "./Skills";
import Contact from "./Contact";
import { Navigation } from "./Navigation";
class Portfolio extends Component {
  state = {
    language: "pl",
    content: {},
    mobile: true,
    scrollY: 0
  };

  getData = (lang = "pl") => {
    const translation = content.filter(element => element.language === lang);
    this.setState({ content: translation[0] });
  };

  checkDevice() {
    const deviceWidth = window.innerWidth > 0 ? window.innerWidth : "640";
    const deviceHeight = window.innerHeight > 0 ? window.innerHeight : "360";

    if (deviceHeight >= 768 && deviceWidth >= 1024) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  navigationToggle = e => {
    const mainNav = document.getElementById("menu");
    const navBarToggle = document.getElementById("toggle");
    navBarToggle.addEventListener("click", function() {
      mainNav.classList.toggle("active");
    });
  };

  langHandler = e => {
    const language = e.target.value;
    this.setState({ language });
  };

  handleScroll = e => {
    const scrollY = window.scrollY;
    this.setState({ scrollY });
  };

  componentDidMount() {
    this.getData();
    this.checkDevice();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    if (this.state.language !== this.state.content.language) {
      this.getData(this.state.language);
    }
  }

  render() {
    const { language, content, scrollY } = this.state;

    return (
      <>
        <Navigation
          navigationToggle={this.navigationToggle}
          langHandler={this.langHandler}
          scrollHandler={this.scrollHandler}
          language={language}
          content={content}
          scrollY={scrollY}
        />

        <Header />
        <main>
          <About content={content} scrollY={scrollY} />
          <Skills content={content} scrollY={scrollY} />
          <Contact content={content} scrollY={scrollY} language={language} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
