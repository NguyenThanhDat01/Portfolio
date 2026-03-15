import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import { FaCode, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import figma from "../../assets/images/figma.svg";
import react from "../../assets/images/react.svg";
import html from "../../assets/images/html.svg";
import js from "../../assets/images/javascript.svg";
import ts from "../../assets/images/typescript.svg";
import git from "../../assets/images/git.svg";
import antd from "../../assets/images/antd.svg";
import postman from "../../assets/images/postman.svg";
const Skill = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();


  
const skill = [
  { name: "Figma", images: <img src={figma} width={50} /> },
  { name: "React", images: <img src={react} width={50} /> },
  { name: "HTML", images: <img src={html} width={50} /> },
  { name: "JavaScript", images: <img src={js} width={50} /> },
  { name: "TypeScript", images: <img src={ts} width={50} /> },
  { name: "GitHub", images: <img src={git} width={50} /> },
  { name: "Antd", images: <img src={antd} width={50} /> },
  { name: "Postman", images: <img src={postman} width={50} /> },
];
   


  return (
    <div
      style={{
        
       color:  "#f1f5f9" ,
        textAlign: "center",
        overflow: "hidden",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
       
      }}
    >
      <h2
        style={{
           color: "#ffffff",
     background:isDark?"linear-gradient(90deg,#15803d,#ca8a04)" :"linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
    padding: "10px 25px",
    borderRadius: "12px",
    display: "inline-block",
    textShadow: "0 4px 10px rgba(0,0,0,0.8)"
          
        }}
      >
        <FaCode /> {t("navbar.skill")}
      </h2>

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "scrollSkill 25s linear infinite",
          gap: "40px",
        }}
      >
        { [...skill, ...skill].map((skill, i) => (
          <div
            key={i}
            style={{
              background: "#0b132b",
              border: "1px solid #1e3a8a",
              borderRadius: "14px",
              height: "140px",
              width: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all .3s",
            }}
             onMouseEnter={(e) => {
              (e.currentTarget.style.transform =
                "translateY(-12px) scale(1.05)");
              (e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(59,130,246,.35)");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "12px",
                color: "#38bdf8",
              }}
            >
              {skill.images}
            </div>

            <div style={{ fontSize: "16px" }}>{skill.name}</div>
          </div>
        ))}
      </div>

      <style>
        {`
        @keyframes scrollSkill {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>
    </div>
  );
};

export default Skill;