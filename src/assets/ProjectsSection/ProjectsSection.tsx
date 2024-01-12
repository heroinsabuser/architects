import Righticon from '../Icons/righticon';
import ProjectBox from '../ProjectBox/ProjectBox';
import SlideButton from '../SlideButton/SlideButton';
import style from './ProjectsSection.module.css'

const ProjectsSection = () => {
    return (
        <section className={style.projects}>
            <h1>Our Projects</h1>
            <div className={style.content}>
                <ProjectBox image='./image 14.png'/>
                <ProjectBox image='./image 15.png'/>
                <ProjectBox image='./image 16.png'/>
                <ProjectBox image='./image 17.png'/>
                <ProjectBox image='./image 18.png'/>
            </div>
            <div className={style.endbutton}>
                <SlideButton black>All Projects <Righticon color='white'/></SlideButton>
            </div>
        </section>
    );
};

export default ProjectsSection;