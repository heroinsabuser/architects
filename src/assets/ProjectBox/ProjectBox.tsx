import Righticon from "../Icons/righticon";

import style from "./ProjectBox.module.css";

const ProjectBox = ({ image }: any) => {
  return (
    <div className={style.projectbox}>
      <img src={image} alt="" />
      <div className={style.content}>
        <span className={style.content_text}>Sample Project</span>
        <span className={style.content_textdown}>view more <Righticon color='white'/></span>
      </div>
    </div>
  );
};

export default ProjectBox;
