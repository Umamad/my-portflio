import React from "react";

const iframStyle = {
  border: "0",
  width: "100%",
  height: "290px",
};
//border:0; width: 100%; height: 290px;
class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      subject: null,
      message: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { lang } = this.props;
    this.setState({ isLoading: true });

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://test.taha-emdad.ir?name=${this.state.name}&email=${this.state.email}&subject=${this.state.subject}&message=${this.state.message}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result[0].result === true) {
          lang === "rtl"
            ? alert("پیام شما با موفقیت ارسال شد!")
            : alert("Your message sent successfully !");
            
        } else {
          lang === "rtl"
            ? alert("خطایی در ارسال پیام به وجود آمده!")
            : alert("Something wnt wrong !");
        }
      })
      .catch((error) => console.log("error", error));
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ""
      });
      event.preventDefault();
  }

  render() {
    const { lang } = this.props;
    return (
      <section id="contact" class="contact">
        {lang === "rtl" ? (
          <div class="container">
            <div class="section-title">
              <h2>تماس با من </h2>
              <p>از اطلاعات یا فرم ریز جهت تماس استفاده کنید.</p>
            </div>

            <div class="row" data-aos="fade-in">
              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>آدرس:</h4>
                    <p>مرند، آذربایجان شرقی، ایران</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>ایمیل:</h4>
                    <p>Marandmohammad@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>شماره تماس:</h4>
                    <p dir="ltr" align="right">
                      +98 921 401 9228
                    </p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50012.18260524391!2d45.73307927244005!3d38.42387828313808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4010cd7896cc4abf%3A0xa63a775ceaf8313d!2sMarand%2C%20East%20Azerbaijan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1632839098816!5m2!1sen!2s"
                    frameborder="0"
                    style={iframStyle}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  role="form"
                  class="php-email-form"
                  onSubmit={this.handleSubmit}
                >
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">نام شما</label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">ایمیل شما</label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">موضوع</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.subject}
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">متن پیام</label>
                    <textarea
                      value={this.state.message}
                      onChange={this.handleChange}
                      class="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading"></div>
                    <div class="error-message"></div>
                    <div class="sent-message">پیام شما با موفقیت ارسال شد!</div>
                  </div>
                  <div class="text-center">
                    <button type="submit">ارسال پیام</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div class="container">
            <div class="section-title">
              <h2>Contact</h2>
              <p>Use information or the form below to leave meassage for me.</p>
            </div>

            <div class="row" data-aos="fade-in">
              <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Marand, East Azerbaijan, Iran</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>Marandmohammad@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+98 921 401 9228</p>
                  </div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50012.18260524391!2d45.73307927244005!3d38.42387828313808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4010cd7896cc4abf%3A0xa63a775ceaf8313d!2sMarand%2C%20East%20Azerbaijan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1632839098816!5m2!1sen!2s"
                    frameborder="0"
                    style={iframStyle}
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  role="form"
                  class="php-email-form"
                  onSubmit={this.handleSubmit}
                >
                  <div class="row">
                    <div class="form-group col-md-6">
                      <label for="name">Your Name</label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">Your Email</label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="name">Subject</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.subject}
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Message</label>
                    <textarea
                      value={this.state.message}
                      onChange={this.handleChange}
                      class="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}
export default ContactSection;
