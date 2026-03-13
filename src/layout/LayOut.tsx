import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AppHeader from "./Header";
import { Content } from "antd/es/layout/layout";

const LayOut = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AppHeader />

      <Content
        style={{
          padding: "20px",
          flex: 1,
        }}
      >
        <Outlet />
      </Content>

      <Footer />
    </div>
  );
};

export default LayOut;