import React from "react";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import HeroSection from "./components/hero/hero.component";
import Main from "./components/main/main.component";
import Footer from "./components/footer/footer.component";
import BackToTopButton from "./components/buttons/backtotop.component";

class App extends React.Component {
  
  render(){
    const { dir } = this.props;
    return (
      <div className="App" dir={dir}>
        <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header lang={dir} />
        <HeroSection lang={dir} />
        <Main lang={dir} />
        <Footer lang={dir} />
        <BackToTopButton />
      </div>
    );
}
}

const mapStateToProps = state => ({
  dir: state.lang.dir
});

export default connect(mapStateToProps)(App);
