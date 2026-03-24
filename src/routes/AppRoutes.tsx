import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";

import Contact from "../pages/contactpage/ContactPage";
import LayOut from "../layout/LayOut";
import ProjectPage from "../pages/projecpage/ProjectPage";
import IntroducePage from "../pages/aboutpage/AboutPageha";
import SkillPage from "../pages/skillspage/SkillPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
       <Route path="/contact" element={<Contact />}/>
       <Route path="/skill" element={<SkillPage />}/>
        <Route path="/introduce" element={<IntroducePage />}/>
         <Route path="/project" element={<ProjectPage />}/>
      </Route>z

    </Routes>
  );
};

export default AppRoutes;