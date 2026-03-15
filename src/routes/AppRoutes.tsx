import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";

import Contact from "../pages/ContactPage";
import LayOut from "../layout/LayOut";
import ProjectPage from "../pages/ProjectPage";
import IntroducePage from "../pages/IntroducePage";
import SkillPage from "../pages/SkillPage";


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