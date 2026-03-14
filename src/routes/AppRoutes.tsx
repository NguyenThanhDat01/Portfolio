import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LayOut from "../layout/layout";
import Contact from "../pages/ContactPage";
import Skill from "../pages/SkillPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
       <Route path="/contact" element={<Contact />}/>
       <Route path="/skill" element={<Skill />}/>
      </Route>

    </Routes>
  );
};

export default AppRoutes;