import { Outlet } from "react-router-dom";

import AppHeader from "./Header";
import { Content } from "antd/es/layout/layout";

const LayOut = () => {
  return (
    <div
       style={{
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
       backgroundImage: "url('src/assets/imges/backgroud.webp')",
  backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
    
  }}
    >
       <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.50)"
    }}
  />
      <AppHeader />

      <Content
        style={{
          padding: "20px",
          flex: 1,
        }}
      >
        <Outlet />
      </Content>

    </div>
  );
};

export default LayOut;