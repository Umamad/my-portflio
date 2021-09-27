import { connect } from "react-redux";
import { changeLang } from '../../redux/lang/lang.actions';


const Navigation = ({ changeLanguage, dir }) => {
  if(dir === 'rtl'){
    return(
      <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><a id="ChLang" style={{cursor: 'pointer'}} onClick={() => changeLanguage('ltr')} class="nav-link scrollto"><i class="bx bx-world"></i> <span style={{marginRight:'5px'}} >English</span></a></li>
            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span style={{marginRight:'5px'}} >خانه</span></a></li>
            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span style={{marginRight:'5px'}} >درباره من</span></a></li>
            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span style={{marginRight:'5px'}} >رزومه</span></a></li>
            <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span style={{marginRight:'5px'}} >ثوابق</span></a></li>
            <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span style={{marginRight:'5px'}} >خدمات</span></a></li>
            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span style={{marginRight:'5px'}} >با من در تماس باش</span></a></li>
          </ul>
      </nav>
  );
  }else{
    return(
      <nav id="navbar" class="nav-menu navbar">
          <ul>
            <li><a id="ChLang" style={{cursor: 'pointer'}} onClick={() => changeLanguage('rtl')} class="nav-link scrollto"><i class="bx bx-world"></i> <span>فارسی</span></a></li>
            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About Me</span></a></li>
            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Keep In Toch</span></a></li>
          </ul>
      </nav>
  );
  }
}

const mapStateToProps = state => ({
  dir: state.lang.dir
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: dir => dispatch(changeLang(dir))
});

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);