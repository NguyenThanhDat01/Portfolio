import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import figma from "../../assets/images/figma.svg";
import react from "../../assets/images/react.svg";
import html from "../../assets/images/html.svg";
import js from "../../assets/images/javascript.svg";
import ts from "../../assets/images/typescript.svg";
import git from "../../assets/images/git.svg";
import antd from "../../assets/images/antd.svg";
import postman from "../../assets/images/postman.svg";
import router from "../../assets/images/react-router.svg";
import axios from "../../assets/images/axios.svg";
import tw from "../../assets/images/tailwindcss.svg";

const Skill = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();

  const skill = [
    { name: "Figma", images: figma },
    { name: "React", images: react },
    { name: "HTML", images: html },
    { name: "JavaScript", images: js },
    { name: "TypeScript", images: ts },
    { name: "GitHub", images: git },
    { name: "Antd", images: antd },
    { name: "Postman", images: postman },
    { name: "React-Router", images: router },
    { name: "Axios", images: axios },
    { name: "TailwindCSS", images: tw },
  ];

  return (
    <div
      style={{
        color: "#f1f5f9",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          padding: "8px 20px",
          borderRadius: "12px",
          display: "inline-block",
          color: isDark ? "#1cf704" : "#0A25F1",
          boxShadow: isDark
            ? "0 10px 40px rgba(197, 255, 214, 0.1)"
            : "0 10px 40px rgba(139, 94, 235, 0.1)",
          border: isDark ? "1px solid green" : "1px solid #0A25F1",
          fontSize: "18px",
        }}
      >
        <FaCode /> {t("navbar.skill")}
      </h2>

      {/* SCROLL */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "scrollSkill 25s linear infinite",
          gap: "25px",
          paddingTop: "30px",
        }}
      >
        {[...skill, ...skill].map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            style={{
              background: "#0b132b",
              border: isDark
                ? "1px solid rgba(11,237,45,0.4)"
                : "1px solid rgba(13, 0, 255, 0.5)",
              borderRadius: "12px",
              height: "110px", // 🔻 nhỏ hơn
              width: "130px", // 🔻 nhỏ hơn
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "all .3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.04)";
              e.currentTarget.style.boxShadow = isDark
                ? "0 0 25px rgba(0, 255, 51, 0.3)"
                : "0 0 25px rgba(0, 98, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* ICON */}
            <div
              style={{
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                filter: isDark
                  ? "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
                  : "none",
              }}
            >
              <img
                src={skill.images}
                alt={skill.name}
                width={38} // 🔻 nhỏ hơn
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* TEXT */}
            <div
              style={{
                fontSize: "14px", // 🔻 nhỏ hơn
                fontWeight: "500",
                color: "#38bdf8",
                textAlign: "center",
              }}
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes scrollSkill {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .skill-card {
            height: 95px !important;
            width: 110px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Skill;