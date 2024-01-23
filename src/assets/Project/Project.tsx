import SlideButton from "../SlideButton/SlideButton";
import style from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({image,title}:any) => {
  return (
    <div className={style.project}>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <span className={style.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
        <div className={style.button}>
            <Link to='project1' preventScrollReset={true}><SlideButton>View More</SlideButton></Link>
        </div>
      </div>

    </div>
  );
};

export default Project;
