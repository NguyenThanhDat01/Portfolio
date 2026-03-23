import { NavLink } from "react-router-dom";
import { Row, Col, Space, Tooltip, Grid, Button, Drawer } from "antd";

import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ChangeLang from "../components/ChangeLang/ChangeLang";

import { FaBars, FaCode, FaFolderOpen, FaGithub, FaHome, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

import avatar from "../assets/images/D.png";
import { useState } from "react";

const { useBreakpoint } = Grid;

const AppHeader = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);

  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const menuItems = [
    { to: "/", icon: <FaHome />, label: t("navbar.home") },
    { to: "/skill", icon: <FaCode />, label: t("navbar.skill") },
    { to: "/project", icon: <FaFolderOpen />, label: t("navbar.project") },
    { to: "/introduce", icon: <FaUser />, label: t("navbar.introduce") },
    { to: "/contact", icon: <MdEmail />, label: t("navbar.contact") },
  ];

  return (
    <header
      style={{
        backgroundImage:isDark ?  "linear-gradient(70deg, #150B14, #21091E,#150B14)": "linear-gradient(90deg, rgb(248, 237, 248), rgb(248, 237, 248)",
        color: isDark ? "#fff" : "#000",
        padding: isMobile ? "10px 15px" : "20px 80px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "all 0.3s"
      }}
    >
      <Row justify="space-between" align="middle" wrap={false}>
        
        {/* BÊN TRÁI: LOGO TRƯỚC + MENU MOBILE SAU */}
        <Col>
          <Space size={isMobile ? 8 : 15} align="center">
            
            {/* 1. LOGO nằm ngoài cùng bên trái */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: isMobile ? "18px" : "26px", fontWeight: 600, color: isDark ? "#02f6ee" : "#0a25f1" }}>
              <NavLink to="/" style={{ display: 'flex' }}>
                <img src={avatar} alt="avatar" style={{ width: isMobile ? "40px" : "60px", height: isMobile ? "40px" : "60px", borderRadius: "50%", objectFit: "cover" }} />
              </NavLink>
              {!isMobile && "Nguyễn Thành Đạt"}
            </div>

            {/* 2. Nút Menu Hamburger nằm liền sau Logo */}
            {isMobile && (
              <Button 
                type="text" 
                icon={<FaBars style={{ color:isDark?  "rgb(255, 255, 255)": "rgb(81, 79, 79)", fontSize: 22 }} />} 
                onClick={() => setOpenDrawer(true)}
                style={{ padding: "0 8px", display: 'flex', alignItems: 'center' }}
              />
            )}
            
          </Space>
        </Col>

        {/* ... các phần còn lại (MENU DESKTOP, BÊN PHẢI) giữ nguyên ... */}

        {/* GIỮA: MENU DESKTOP */}
        {!isMobile && (
          <Col md={14}>
            <nav style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 18,
                    fontWeight: 600,
                    color: isActive ? (isDark ? "#02f6ee" : "#0a25f1") : (isDark ? "#f1f5f9" : "#000000"),
                    textDecoration: "none",
                    borderBottom: isActive ? `3px solid ${isDark ? "#02f6ee" : "#0a25f1"}` : "3px solid transparent",
                    paddingBottom: 4,
                    transition: "all 0.3s",
                  })}
                >
                  {item.icon} {item.label}
                </NavLink>
              ))}
            </nav>
          </Col>
        )}

        {/* BÊN PHẢI: GITHUB + NGÔN NGỮ + THEME */}
        <Col>
          <Space size={isMobile ? 12 : 20}>
            
            {/* GitHub - Luôn hiện */}
            <a href="https://github.com/NguyenThanhDat01" target="_blank" rel="noopener noreferrer"
              style={{
        height: 40,
        padding: "0 14px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(255,255,255,0.15)",
        color: "#fff",
        transition: "all 0.25s",
        
      }}
       onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.25)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.15)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
              <Tooltip title="GitHub">
                <FaGithub style={{ fontSize: isMobile ? 22 : 24, color:  isDark ?"#ffffff": "#080808" }} />
              </Tooltip>
            </a>

            {/* NGÔN NGỮ - Luôn hiện */}
            <ChangeLang />

            {/* THEME - Luôn hiện */}
            <ThemeSwitcher />
          </Space>
        </Col>
      </Row>

      {/* DRAWER MOBILE */}
      <Drawer
        title={<span style={{ color: isDark ? "#02f616" : "#ff0000" }}>Menu</span>}
        placement="left" 
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        width={250}
        
        styles={{ body: { background: isDark ? "#1a1a2e" : "#fff" }, header: { background: isDark ? "#1a1a2e" : "#fff" }}}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpenDrawer(false)}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 15,
                fontSize: 18,
                fontWeight: 600,
                color: isActive ? (isDark ? "#02f6ee" : "#0400ff") : (isDark ?"#ffffff": "#666" ),
                textDecoration: "none",
              })}
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </nav>
      </Drawer>
    </header>
  );
};

export default AppHeader;