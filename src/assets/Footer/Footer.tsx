import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.icon}>
            <img src="./bigicon.png" alt="" />
          </div>
          <div className={style.info}>
            <h3 className={style.h3text}>Information</h3>
            <span className={style.spantext}>Main</span>
            <span className={style.spantext}>Gallery</span>
            <span className={style.spantext}>Projects</span>
            <span className={style.spantext}>Certifications</span>
            <span className={style.spantext}>Contacts</span>
          </div>
          <div className={style.info}>
            <h3 className={style.h3text}>Contacts</h3>
            <div>
              <img
                style={{ marginRight: "15px" }}
                src="./footer_icon1.svg"
                alt=""
              />
              <span className={style.spantext}>
                1234 Sample Street Austin Texas 78704
              </span>
            </div>
            <div style={{ marginTop: "32px" }}>
              <img
                style={{ marginRight: "15px" }}
                src="./footer_icon2.svg"
                alt=""
              />
              <span className={style.spantext}>512.333.2222</span>
            </div>
            <div style={{ marginTop: "32px" }}>
              <img
                style={{ marginRight: "15px" }}
                src="./footer_icon3.svg"
                alt=""
              />
              <span className={style.spantext}>sampleemail@gmail.com</span>
            </div>
          </div>
          <div className={style.info}>
            <h3 className={style.h3text}>Social Media</h3>
            <div className={style.mediaicons}>
              <img src="./facebook.svg" alt="" />
              <img src="./twitter.svg" alt="" />
              <img src="./Linked In.svg" alt="" />
              <img src="./pininterest.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.rights}>
        <span className={style.rightstext}>© 2024 All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
