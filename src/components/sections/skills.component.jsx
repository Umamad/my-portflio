const SkillsSection = ({ lang }) => (
  <section id="skills" class="skills section-bg">
    <div class="container">
      {lang === "rtl" ? (
        <div class="section-title">
          <h2>مهارت ها</h2>
          <p>
            به روز رسانی مهارت های فعلی و یادگیری تکنولوژی های جدید باعث ایجاد
            اپ هایی با کارایی و ظاهری زیبا و به روز می شود که در نهایت رضایت
            کارفرمایان عزیز را در پی دارد.
          </p>
        </div>
      ) : (
        <div class="section-title">
          <h2>Skills</h2>
          <p>
            Updating current skills and learning new technologies will create
            apps with has beautiful and up-to-date appearance and high
            performance, which will ultimately satisfy dear employers.
          </p>
        </div>
      )}
      <div class="row skills-content" dir="ltr">
        <div class="col-lg-6" data-aos="fade-up">
          <div class="progress">
            <span class="skill">
              HTML <i class="val">100%</i>
            </span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">
              CSS <i class="val">90%</i>
            </span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">
              JavaScript <i class="val">75%</i>
            </span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div class="progress">
            <span class="skill">
              PHP <i class="val">85%</i>
            </span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">
              Laravel <i class="val">80%</i>
            </span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">
              React.Js <i class="val">78%</i>
            </span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="78"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
