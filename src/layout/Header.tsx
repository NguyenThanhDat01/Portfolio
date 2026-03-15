import { NavLink } from "react-router-dom";
import { Row, Col, Space, Tooltip } from "antd";

import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ChangeLang from "../components/ChangeLang/ChangeLang";
import { AiOutlineHome } from "react-icons/ai";
import { FaCode, FaFolderOpen, FaGithub, FaHome, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { GithubOutlined } from "@ant-design/icons";

const AppHeader = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();

  return (
    <header
      style={{
        background: isDark ? "rgba(0, 0, 0, 0.)" : "transparent",
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
              color:isDark ?"#02f6ee": "#facc15"
            }}
          >
            
        <NavLink to="/">
            <img
              src="src/assets/images/D.png"
              alt="avatar"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            </NavLink>
            Nguyễn Thành Đạt
          </div>
        </Col>

        {/* Menu */}
        <Col>
          <nav
            style={{
              display: "flex",
              gap: "35px",
                color: isDark ? "#070707" : "#f11212",
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
             color: isActive
              ? (isDark ?"#02f6ee": "#facc15" )
              : (isDark ? "#f1f5f9" : "#ffffff"),
                textDecoration: "none",
                borderBottom: isActive 
              ? (isDark ?  "3px solid #02f6ee":  "3px solid #facc15" )
              : (isDark ? "none" :  "none"),
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
                transition: "all 0.3s ease"
              })}
            >
              <span>
               <FaHome /> {t("navbar.home")}
              </span>
            </NavLink>
              <NavLink
              to="/introduce"
                style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 20,
                fontWeight: 600,
                color: isActive
              ? (isDark ?"#02f6ee": "#facc15" )
              : (isDark ? "#f1f5f9" : "#ffffff"),
                textDecoration: "none",
                borderBottom: isActive 
              ? (isDark ?  "3px solid #02f6ee":  "3px solid #facc15" )
              : (isDark ? "none" :  "none"),
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
                transition: "all 0.3s ease"
              })}
            >
              <span>
                <FaUser /> {t("navbar.introduce")}
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
               color: isActive
              ? (isDark ?"#02f6ee": "#facc15" )
              : (isDark ? "#f1f5f9" : "#ffffff"),
                textDecoration: "none",
                borderBottom: isActive 
              ? (isDark ?  "3px solid #02f6ee":  "3px solid #facc15" )
              : (isDark ? "none" :  "none"),
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
                transition: "all 0.3s ease"
              })}
            >
              <span>
                <FaCode /> {t("navbar.skill")}
              </span>
            </NavLink>
           
             <NavLink
              to="/project"
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 20,
                fontWeight: 600,
                color: isActive
              ? (isDark ?"#02f6ee": "#facc15" )
              : (isDark ? "#f1f5f9" : "#ffffff"),
                textDecoration: "none",
                borderBottom: isActive 
              ? (isDark ?  "3px solid #02f6ee":  "3px solid #facc15" )
              : (isDark ? "none" :  "none"),
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
                transition: "all 0.3s ease"
              })}
             
            >
              <span>
                <FaFolderOpen /> {t("navbar.project")}
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
            color: isActive
              ? (isDark ?"#02f6ee": "#facc15" )
              : (isDark ? "#f1f5f9" : "#ffffff"),
                textDecoration: "none",
                borderBottom: isActive 
              ? (isDark ?  "3px solid #02f6ee":  "3px solid #facc15" )
              : (isDark ? "none" :  "none"),
                paddingBottom: 4,
                textShadow: "0 2px 6px rgba(0,0,0,40)",
                transition: "all 0.3s ease"
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
            <a
            href="https://github.com/NguyenThanhDat01"
            target="_blank"
            rel="noopener noreferrer"
>
             <Tooltip title="GitHub" >
                    <FaGithub  
                          style={{
                      height: 40,
                      padding: "0 14px",
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(255,255,255,0.15)",
                      color: "#fff",
                      transition: "all 0.25s",
              }}/>
            </Tooltip>
           </a>
            <ChangeLang />
            <ThemeSwitcher />
          </Space>
        </Col>
      </Row>
    </header>
  );
};

export default AppHeader;
