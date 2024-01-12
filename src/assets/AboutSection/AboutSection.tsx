import SlideButton from "../SlideButton/SlideButton";
import style from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={style.about}>
      <div className={style.content}>
        <div className={style.image}>
          <div style={{ marginBottom: "30px", marginRight: "30px" }}>
            <img src="./about_img1.png" alt="" />
          </div>

          <div>
            <img src="./about_img2.png" alt="" />
          </div>
        </div>
        <div style={{ marginTop: "30px", marginRight: "30px" }}>
          <img src="./about_img3.png" alt="" />
        </div>
        <div>
          <h1>About</h1>
          <p className={style.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <SlideButton>read more</SlideButton>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
