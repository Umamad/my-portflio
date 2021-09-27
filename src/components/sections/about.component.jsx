const AboutSection = ({ lang }) => {
  if (lang === 'rtl') {
    return(
      <section id="about" class="about">
        <div class="container">
  
          <div class="section-title">
            <h2>درباره من</h2>
            <p>
            مـهـنـدس  نــرم  افــزار، تـوسـعه دهـنـده و طراح وب  با ســابقه  چهار  ســال
بـرنـامه نـویـسـی و طــــراحــی الـگــوریـتـم  بـرای حــل مساعل مختلف و 
 علاقه مند به حل   مشکلات پیـچـیده، تـحقیق و تـجربـه تکنــولـوژی هـای مـختـلـف و مـشتاق کـار تـیمی.
            </p>
          </div>
  
          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="assets/img/3.JPEG" class="img-fluid" alt="محمد سعادتی" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>طراح و برنامه نویس وب</h3>
              <p class="fst-italic">
                جزعیات بیشتر
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-left"></i> <strong>تاریخ تولد:</strong> <span>16 اسفند 1377</span></li>
                    <li><i class="bi bi-chevron-left"></i> <strong>وب سایت:</strong> <span>www.example.com</span></li>
                    <li><i class="bi bi-chevron-left"></i> <strong>تلفن:</strong> <span dir="ltr">+98 921 401 9228</span></li>
                    <li><i class="bi bi-chevron-left"></i> <strong>شهر:</strong> <span>مرند، آذربایجان شرقی، ایران</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-left"></i> <strong>سن:</strong> <span>23</span></li>
                    <li><i class="bi bi-chevron-left"></i> <strong>مدرک تحصیلی:</strong> <span>کارشناسی</span></li>
                    <li><i class="bi bi-chevron-left"></i> <strong>ایمیل:</strong> <span>Marandmohammad@gmail.com</span></li>
                    <li><i class="bi bi-chevron-left"></i> <strong>فریلنس:</strong> <span>در دسترس</span></li>
                  </ul>
                </div>
              </div>
              <p>
                تمام مـهارت ها و تـجربیـات من با هدف کسب رضـایت شما، روزانـه در حال افـزایش هستند.
              </p>
            </div>
          </div>
        </div>
      </section>
      );
  }else{
    return(
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About Me</h2>
          <p>Software engineer, developer and web designer with four years of experience in programming and algorithm design for solving various problems, Interested in solving complex problems, researching and experimenting with different technologies and teamwork enthusiasm.</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="assets/img/3.JPEG" class="img-fluid" alt="Mohammad Saadati" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI Designer &amp; Web Developer.</h3>
            <p class="fst-italic">
              More Detail
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>7 March 1998</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+98 921 401 9228</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Marand, East Azerbaijan, Iran</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Marandmohammad@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              All my skills and experience are growing daily to gain your consent.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
} 
};

export default AboutSection;