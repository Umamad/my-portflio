const ServicesSection = ({ lang }) => (
    <section id="services" class="services">
      {
        lang === 'rtl' ? (
          <div class="container">

        <div class="section-title">
          <h2>سرویس ها</h2>
          <p>برای اطلاع از نحوه ارائه خدمات، گستره سرویس ها و مشاوره در مورد دیجیتال کردن کسب و کار خود تماس بگیرید.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-columns-gap"></i></div>
            <h4 class="title"><a href="">طراحی رابط کاربری</a></h4>
            <p class="description">اولین قضاوت بر اساس ظاهر انجام می شود پس ظاهر زیبا در وب سایت و اپ شما از اهمیت بالایی برخوردار است.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bi bi-diagram-3"></i></div>
            <h4 class="title"><a href="">طراحی دیتابیس</a></h4>
            <p class="description">نحوه ذخیره اطلاعات و روابط میان آن ها باید به سادگی انجام شود تا از پیچیدگی برنامه کاسته شود.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-globe2"></i></div>
            <h4 class="title"><a href="">وب سایت تبلیغاتی</a></h4>
            <p class="description">وبسایت های تبلیغاتی بهترین بستر برای معرفی شما به دیگران به صورت صوری و متنی است.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="bi bi-code-slash"></i></div>
            <h4 class="title"><a href="">گسترش صفحات وب</a></h4>
            <p class="description">در عصر دیجیتال همیشه باید بروز بود، آپدیت و تغییرات باید کاملا زیبا و کاربر پسند باشد.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="bi bi-bug"></i></div>
            <h4 class="title"><a href="">اشکال زدایی ( دیباگ )</a></h4>
            <p class="description">ایرادات توجهات منفی را به کسب و کار شما جلب می کنند، رفع ایرادات بسیار ضروری و مهم است.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div class="icon"><i class="bi bi-code-square"></i></div>
            <h4 class="title"><a href="">اپ اندروید و دسکتاپ</a></h4>
            <p class="description">ساخت برنامه های اندروید و دسکتاپ برای کسب و کار شما با زیبایی و کارایی بالا</p>
          </div>
        </div>
      </div>
        ) : (
        <div class="container">

          <div class="section-title">
            <h2>Services</h2>
            <p>Call for information on how to provide services, scope of services and advice on Digitize your business.</p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div class="icon"><i class="bi bi-columns-gap"></i></div>
              <h4 class="title"><a href="">UI Design</a></h4>
              <p class="description">The first judgment is based on appearance, so a beautiful appearance on your website and app is very important.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-diagram-3"></i></div>
              <h4 class="title"><a href="">DataBase Design</a></h4>
              <p class="description">How to store information and the relationships between them should be done simply to reduce the complexity of the program.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-globe2"></i></div>
              <h4 class="title"><a href="">Advertising WebSite</a></h4>
              <p class="description">Advertising websites are the best platform for introducing you to others both media and textually ways.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bi bi-code-slash"></i></div>
              <h4 class="title"><a href="">Web Development</a></h4>
              <p class="description">In the digital age, must always be up to date, updates and changes must be quite beautiful and user-friendly.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="bi bi-bug"></i></div>
              <h4 class="title"><a href="">Debug</a></h4>
              <p class="description">Defects draw negative attention to your business, it is very necessary and important to fix the defects.</p>
            </div>
            <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
              <div class="icon"><i class="bi bi-code-square"></i></div>
              <h4 class="title"><a href="">Android &amp; Desktop App</a></h4>
              <p class="description">Build Android and desktop applications for your business with beauty and high performance</p>
            </div>
          </div>
        </div>
        )
      }
    </section>
);

export default ServicesSection;