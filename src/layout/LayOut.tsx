import { Outlet } from "react-router-dom";
import AppHeader from "./Header";
import { Content } from "antd/es/layout/layout";
import AppFooter from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import background from "../assets/images/background.jpg";

const LayOut = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",

        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",

          // 👇 overlay chuẩn hơn (dark + light đều đẹp)
          background: isDark ? "rgba(10, 10, 10, 0.9)" : "transparent",
         

          // 👇 responsive padding
          padding: "16px",
        }}
      >
        <AppHeader />

        <Content
          style={{
            flex: 1,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",

            // 👇 responsive spacing
            padding: "16px",
          }}
        >
          <Outlet />
        </Content>

        <AppFooter />
      </div>
    </div>
  );
};

export default LayOut;