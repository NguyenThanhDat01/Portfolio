import { Outlet } from "react-router-dom";

import AppHeader from "./Header";
import { Content } from "antd/es/layout/layout";
import AppFooter from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const LayOut = () => {
  const { theme } = useContext(ThemeContext)!;
    const isDark = theme === "dark";
  return (
    <div
       style={{
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    
 backgroundImage: "url('src/assets/images/bachgourd.jpg')",
  backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
    
  }}
    >
      <div style={{  background: isDark ? "rgba(10, 10, 10, 0.9)" : "transparent",}}>
 
      <AppHeader />

      <Content
        style={{
          padding: "20px",
          flex: 1,
        }}
      >
        <Outlet />
        
      </Content>
      <AppFooter/>

    </div>
    </div>
  );
};

export default LayOut;