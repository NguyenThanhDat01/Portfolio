import { Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import "./index.css";

const App = () => {
  return (
 
    <Routes>
      {/* Client */}
      <Route path="/*" element={<AppRoutes />} />
     
    </Routes>
  
  );
};

export default App;

