const ResumeSection = ({ lang }) => (
  <section id="resume" class="resume">
    {lang === "rtl" ? (
      <div class="container">
        <div class="section-title">
          <h2>رزومه</h2>
          <p>آخرین بروز رسانی : مهر ماه 1400</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">خلاصه</h3>
            <div class="resume-item__rtl pb-0">
              <h4>محمد سعادتی</h4>
              <p>
                <em>
                  مـهـنـدس نــرم افــزار، مدرس، تـوسـعه دهـنـده و طراح وب با ســابقه
                  چهار ســال بـرنـامه نـویـسـی و طــــراحــی الـگــوریـتـم بـرای
                  حــل مساعل مختلف.
                </em>
              </p>
              <ul>
                <li>مرند، آذربایجان شرقی، ایران</li>
                <li><span dir="ltr">(98) 921-401-9228</span></li>
                <li>Marandmohammad@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">تحصیلات</h3>
            <div class="resume-item__rtl">
              <h4>کارشناسی مهندسی تکنولوژی نرم افزار کامپیوتر</h4>
              <h5>1398 - 1400</h5>
              <p>
                <em>دانشگاه آزاد اسلامی</em>
              </p>
              <p>
                دانشجوی ممتاز
                <br />
                ابتداع متد ماتریکس برای اپ های تحت وب
                <br />
                تدریس در کلاس های تمرینی
              </p>
            </div>
            <div class="resume-item__rtl">
              <h4>کاردانی مهندسی نرم افزار کامپیوتر</h4>
              <h5>1396 - 1398</h5>
              <p>
                <em>دانشگاه آزاد اسلامی</em>
              </p>
              <p>
                دانشجوی ممتاز
              </p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">ثوابق</h3>
            <div class="resume-item__rtl">
              <h4>برنامه نویس ارشد PHP و Laravel</h4>
              <h5>1397 - 1398</h5>
              <p>
                <em>زوپسی</em>
              </p>
              <ul>
                <li>
                  رهبری، نظارت و حفظ روحیه تیم برنامه نویسی و گرافیک
                </li>
                <li>
                  راهنمایی و مذاکره با شرکت های طرف قرارداد و مشتریان حقیقی
                </li>
                <li>
                  تحقیق و تشخیص بازار های هدف و اراعه راهکار های تبلیغاتی
                </li>
              </ul>
            </div>
            <div class="resume-item__rtl">
              <h4>برنامه نویس PHP و Laravel</h4>
              <h5>1396 - 1397</h5>
              <p>
                <em>زوپسی</em>
              </p>
              <ul>
                <li>
                  عضو معمولی تیم
                </li>
                <li>
                  انجام وظایف محول شده
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div class="container">
        <div class="section-title">
          <h2>Resume</h2>
          <p>
            Last Update : September 2021
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Mohammad Saadati</h4>
              <p>
                <em>
                Software engineer, teacher, developer and web designer with four years of experience in programming and algorithm design for solving various problems.
                </em>
              </p>
              <ul>
                <li>Marand, East Azerbaijan, Iran</li>
                <li>(98) 921-401-9228</li>
                <li>Marandmohammad@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Master of Computer Software Technology Engineering &amp; Technician</h4>
              <h5>2019 - 2021</h5>
              <p>
                <em>Azad University (IAU)</em>
              </p>
              <p>
                Outstanding Student
                <br />
                Invent The New "Matrix" Technology For Web Apps
                <br />
                Teaching In Practice Classes
              </p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Computer Software Engineering</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>Azad University (IAU)</em>
              </p>
              <p>
                Outstanding Student
              </p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Senior PHP &amp; Laravel Programer</h4>
              <h5>2018 - 2019</h5>
              <p>
                <em>ZoopC </em>
              </p>
              <ul>
                <li>
                  Lead, monitor and maintain the morale of the programming and graphics team
                </li>
                <li>
                  Guidance and negotiation with contract companies
                </li>
                <li>
                  Research and identify target markets and provide advertising strategies
                </li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>junior PHP &amp; Laravel Programer</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>ZoopC </em>
              </p>
              <ul>
                <li>
                  Perform assigned tasks
                </li>
                <li>
                  Ordinary team member
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
);

export default ResumeSection;
