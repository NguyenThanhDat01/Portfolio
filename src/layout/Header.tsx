import { NavLink } from "react-router-dom";
import { Row, Col, Space } from "antd";

import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ChangeLang from "../components/ChangeLang/ChangeLang";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

const AppHeader = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();

  return (
    <header
      style={{
        background: isDark ? "#000000" : "transparent",
        color: isDark ? "#fff" : "#000",
        padding: "20px 80px",
        boxShadow: "none",
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
              fontWeight: 600,
              color: "#facc15",
            }}
          >
            <img
              src="src/assets/imges/D.png"
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
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 20,
                fontWeight: 600,
                color: isActive ? "#facc15" : "#f1f5f9",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid #facc15" : "none",
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
              })}
            >
              <span>
                <AiOutlineHome /> {t("navbar.home")}
              </span>
            </NavLink>

            <NavLink
              to="/skill"
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 20,
                fontWeight: 600,
                color: isActive ? "#facc15" : "#f1f5f9",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid #facc15" : "none",
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
              })}
            >
              <span>
                <FaCode /> {t("navbar.skill")}
              </span>
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 20,
                fontWeight: 600,
                color: isActive ? "#facc15" : "#f1f5f9",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid #facc15" : "none",
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
              })}
            >
              <span>
                <MdEmail /> {t("navbar.contact")}
              </span>
            </NavLink>
          </nav>
        </Col>
        <Col>
          <Space size={8}>
            <ChangeLang />
            <ThemeSwitcher />
          </Space>
        </Col>
      </Row>
    </header>
  );
};

export default AppHeader;
