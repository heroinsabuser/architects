import Lefticon from "../Icons/lefticon";
import Righticon from "../Icons/righticon";
import Sidebutton from "../SideButton/sidebutton";
import SlideButton from "../SlideButton/SlideButton";
import { useState } from "react";
import style from "./MainSection.module.css";

interface ISlides {
  id: number;
  image: string;
  name: string;
}

const slides: ISlides[] = [
  { id: 1, image: "./project_img.png", name: "Lorum" },
  { id: 2, image: "./slide2.jpg", name: "Ipsum" },
];

const MainSection = () => {
  const [slide] = useState(slides);
  const [index, setIndex] = useState(0);
  return (
    <div className={style.container}>
      <section className={style.project}>
        <div className={style.project_left}>
          <div className={style.text}>
            <h1>PROJECT</h1>
            <h2>{slide[index].name}</h2>
          </div>
          <div className={style.buttons}>
            <Sidebutton
              clickFunction={() => {
                const newIndex = index === 0 ? slide.length - 1 : index - 1;
                setIndex(newIndex);
              }}
            >
              <Lefticon />
            </Sidebutton>
            <Sidebutton
              clickFunction={() => {
                const newIndex = index === slide.length - 1 ? 0 : index + 1;
                setIndex(newIndex);
              }}
            >
              <Righticon color="#333333" />
            </Sidebutton>
          </div>
          <div className={style.page_count}>{`0${index + 1} / 02`}</div>
        </div>
        <div className={style.project_right}>
          <div>
            <img
              src={slide[index].image}
              alt=""
              className={style.slider_image}
            />
            <div className={style.slide_button}>
              <SlideButton>View Project</SlideButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
