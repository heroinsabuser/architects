import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./assets/Layout/Layout";
import Mainpage from "./assets/Pages/MainPage/mainpage";
import PhotoGallery from "./assets/Pages/GalleryPage/PhotoGallery";
import Projects from "./assets/Pages/ProjectsPage/Projects";
import ProjectPage from "./assets/Pages/ProjectsPage/Projects/ProjectPage";
import Certifications from "./assets/Pages/CertificationsPage/Certifications";
import ScrollToTop from "./assets/ScrollToTop/ScrollToTop";
import Contacts from "./assets/Pages/Contacts/Contacts";

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          <Route path="gallery" element={<PhotoGallery/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='projects/project1' element={<ProjectPage/>}/>
          <Route path='certifications' element={<Certifications/>}/>
          <Route path="contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
