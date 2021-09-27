import React from "react";
import Typed from "typed.js";

class HeroSection extends React.Component {
  componentDidMount() {
    const { lang } = this.props;
    let strings;
    if (lang === "rtl") {
      strings = ["طراح", "گسترش دهنده وب", "فریلنسر"];
    } else {
      strings = ["Designer", "WebDeveloper", "Freelancer"];
    }
    const options = {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };

    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }
  componentDidUpdate() {
    this.typed.destroy();
    const { lang } = this.props;
    let strings;
    if (lang === "rtl") {
      strings = ["طراح", "گسترش دهنده وب", "فریلنسر"];
    } else {
      strings = ["Designer", "WebDeveloper", "Freelancer"];
    }
    const options = {
      strings: strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };

    this.typed = new Typed(this.el, options);
  }

  render() {
    const { lang } = this.props;
    if (lang === "rtl") {
      return (
        <section
          id="hero"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="hero-container" data-aos="fade-in">
            <h1>محمد سعادتی</h1>
            <p>
              <span
                ref={(el) => {
                  this.el = el;
                }}
              />
            </p>
            {/* <p>
              من <span class="typed" direction="rtl"></span> هستم.
            </p> */}
          </div>
        </section>
      );
    } else {
      return (
        <section
          id="hero"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="hero-container" data-aos="fade-in">
            <h1>Mohammad Saadati</h1>
            <p>
              I'm{" "}
              <span
                ref={(el) => {
                  this.el = el;
                }}
              />
            </p>
          </div>
        </section>
      );
    }
  }
}

/*
const HeroSection = ({ lang }) => {
    if (lang === 'rtl') {
        return(
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                <h1>محمد سعادتی</h1>
                <p>من <span class="typed" direction={lang}></span> هستم.</p>
                </div>
            </section>
        );
    }else{
        return(
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in">
                <h1>Mohammad Saadati</h1>
                <p>I'm <span class="typed" direction={lang}></span></p>
                </div>
            </section>
        );
    }  
};
*/
export default HeroSection;
