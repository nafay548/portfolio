import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>Let's Work Together</h2>
        <p style={{ color: "var(--textColor)", fontSize: "1.2rem", fontWeight: 300, marginBottom: "30px" }}>
          If you want content that actually performs — not just looks good. <br/>
          Or send me a message and I’ll share samples.
        </p>
        <div style={{ marginBottom: "50px" }}>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openBookingModal"))}
            className="nav-book-btn"
            style={{ padding: "16px 36px", fontSize: "16px" }}
            data-cursor="disable"
            type="button"
          >
            BOOK A ZOOM MEETING 📅
          </button>
        </div>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:runmediamarketingagency@gmail.com" data-cursor="disable">
                runmediamarketingagency@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923710181872" data-cursor="disable">
                +92 371 0181872
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/run-media-2016632b0/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/the.runmedia/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/share/1JFggZshys/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@RUN.Mediamarketing"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Abdul Nafay</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
