import Navigation from "../navigation/navigation.component";

const Header = ({ lang }) => (
    <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/profile-small.jpg" alt="محمد سعادتی" class="img-fluid rounded-circle" />
        {
          lang === 'rtl' ? (
            <h1 class="text-light"><a href="index.html">محمد سعادتی</a></h1>
          ) : (
            <h1 class="text-light"><a href="index.html">Mohammad Saadati</a></h1>
          )
        }
        <div class="social-links mt-3 text-center">
          <a href="https://t.me/uamamd" class="twitter" target="_blank" rel="noopener"><i class="bx bxl-telegram"></i></a>
          <a href="https://www.instagram.com/_umamad_/" class="instagram" target="_blank" rel="noopener"><i class="bx bxl-instagram"></i></a>
          <a href="https://join.skype.com/invite/l8e1uJSldHUZ" class="google-plus" target="_blank" rel="noopener"><i class="bx bxl-skype"></i></a>
          <a href="https://www.linkedin.com/in/mohammad-saadati-b230021a4" class="linkedin" target="_blank" rel="noopener"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <Navigation />
    </div>
  </header>
);

export default Header;