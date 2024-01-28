import Righticon from '../../../../Icons/righticon';
import ProjectBox from '../../../../ProjectBox/ProjectBox';
import SlideButton from '../../../../SlideButton/SlideButton';
import style from './ProjectsSection.module.css'
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
    return (
        <section className={style.projects}>
            <h1>Our Projects</h1>
            <div className={style.content}>
            <Link to='projects/project1'><ProjectBox image='./image 14.png'/></Link>
            <Link to='projects/project1'><ProjectBox image='./image 15.png'/></Link>
            <Link to='projects/project1'><ProjectBox image='./image 16.png'/></Link>
            <Link to='projects/project1'><ProjectBox image='./image 17.png'/></Link>
            <Link to='projects/project1'><ProjectBox image='./image 18.png'/></Link>
            </div>
            <div className={style.endbutton}>
                <Link to='projects'><SlideButton black>All Projects <Righticon color='white'/></SlideButton></Link>
            </div>
        </section>
    );
};

export default ProjectsSection;