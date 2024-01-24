import MainSection from "./Sections/MainSection/MainSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import FocusSection from "./Sections/FocusSection/FocusSection";
import ProjectsSection from "./Sections/ProjectsSection/ProjectsSection";
import FormSection from "./Sections/FormSection/FormSection";

const Mainpage = () => {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <FocusSection />
      <ProjectsSection />
      <FormSection />
    </div>
  );
};

export default Mainpage;
