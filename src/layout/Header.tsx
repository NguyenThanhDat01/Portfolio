import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import ThemeSwitcher from "../pages/ThemeSwitcher";
import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";

const AppHeader = () => {
    const { theme } = useContext(ThemeContext)!;
const isDark = theme === "dark";
  return (
    <header
      style={{
        background: isDark ? "#000000" : "#18283e",
         color: isDark ? "#fff" : "#000",
     
        padding: "20px 80px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Row justify="space-between" align="middle">

        {/* Logo */}
        <Col>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontSize: "26px",
              fontWeight: "bold",
              color: "#facc15",
            }}
          >
            <img
              src="/src/assets/logo/D.png"
              alt="avatar"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            Nguyễn Thành Đạt
          </div>
        </Col>

        {/* Menu */}
        <Col>
          <nav
            style={{
              display: "flex",
              gap: "35px",
            }}
          >
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#facc15" : "#f1f5f9",
                textDecoration: "none",
                fontSize: "18px",
                borderBottom: isActive ? "2px solid #facc15" : "none",
                paddingBottom: "4px",
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="/skill"
              style={({ isActive }) => ({
                color: isActive ? "#facc15" : "#f1f5f9",
                textDecoration: "none",
                fontSize: "18px",
                borderBottom: isActive ? "2px solid #facc15" : "none",
                paddingBottom: "4px",
              })}
            >
              Skills
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#facc15" : "#f1f5f9",
                textDecoration: "none",
                fontSize: "18px",
                borderBottom: isActive ? "2px solid #facc15" : "none",
                paddingBottom: "4px",
              })}
            >
              Contact
            </NavLink>
          </nav>
        </Col>
      <ThemeSwitcher/>
      </Row>
    
    </header>
  );
};

export default AppHeader;