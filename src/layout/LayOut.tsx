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
      }}
    >
      {/* HEADER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          background: isDark
            ? "rgba(10,10,10,0.7)"
            : "rgba(255,255,255,0.7)",
        }}
      >
        <AppHeader />
      </div>

      {/* CONTENT */}
      <Content
        style={{
          flex: 1,
          width: "100%",
          display: "flex",              // 🔥 thêm
          justifyContent: "center",     // 🔥 center page
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",         // 🔥 giới hạn layout
            padding: "clamp(12px, 4vw, 32px)",
          }}
        >
          <Outlet />
        </div>
      </Content>

      {/* FOOTER */}
      <AppFooter />
    </div>
  );
};
export default LayOut;