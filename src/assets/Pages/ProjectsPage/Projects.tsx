import Lefticon from "../../Icons/lefticon";
import Righticon from "../../Icons/righticon";
import Project from "../../Project/Project";
import Sidebutton from "../../SideButton/sidebutton";
import style from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={style.projects}>
      <div className={style.text}>
        <h1>Our</h1>
        <h2>Projects</h2>
      </div>
      <div className={style.projectlist}>
        <Project image="./project_image1.png" title="Sample Project 1" />
        <Project image="./project_image2.png" title="Sample Project 2" />
        <Project image="./project_image3.png" title="Sample Project 3" />
      </div>
      <div className={style.navigation}>
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <div className={style.navtext}>01 / 05</div>
          <div style={{ marginLeft: "30px" }}>
            <Sidebutton>
              <Lefticon />
            </Sidebutton>
            <Sidebutton>
              <Righticon color="#333333" />
            </Sidebutton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
