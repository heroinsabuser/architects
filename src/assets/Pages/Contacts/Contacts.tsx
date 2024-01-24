import SlideButton from "../../SlideButton/SlideButton";
import style from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.content}>
        <div style={{ marginBottom: "34px" }}>
          <h1>Contact</h1>
          <h2>Information</h2>
        </div>
        <div className={style.company}>
          <span className={style.name}>Company Name</span>
          <span className={style.address}>
            1234 Sample Street Austin Texas 76401
          </span>
        </div>
        <div style={{ marginBottom: "53px" }}>
          <span className={style.name}>512.333.2222</span>
        </div>
        <div style={{ marginBottom: "33px" }}>
          <span className={style.address}>sampleemail@gmail.com</span>
        </div>
        <div>
          <SlideButton black>Contact Us</SlideButton>
        </div>
      </div>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26018.489312054957!2d-97.7631560735642!3d30.27402932288905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2z0J7RgdGC0LjQvSwg0KLQtdGF0LDRgSwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1706090776241!5m2!1sru!2sru"
          width="800"
          height="500"
          style={{ border: "#000 solid 1px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
