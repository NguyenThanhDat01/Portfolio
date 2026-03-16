import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import { FaCode} from "react-icons/fa";
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
const Skill = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();


  
const skill = [
  { name: "Figma", images: figma },
  { name: "React", images: react },
  { name: "HTML", images:  html },
  { name: "JavaScript", images:js  },
  { name: "TypeScript",images: ts },
  { name: "GitHub", images: git},
  { name: "Antd", images:antd },
  { name: "Postman", images: postman },
  { name: "React-Router", images:router },
  { name: "Axios", images: axios },
];
   


  return (
    <div
      style={{
        
       color:  "#f1f5f9" ,
        textAlign: "center",
        overflow: "hidden",
      
       
      }}
    >
      <h2
        style={{
           color: "#ffffff",
     background:isDark?"linear-gradient(90deg,#15803d,#ca8a04)" :"linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
    padding: "10px 25px",
    borderRadius: "12px",
    display: "inline-block",
    textShadow: "0 4px 10px rgba(0,0,0,0.8)",
    border: "1px solid #fff"
    

          
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
           paddingTop: "40px",

        
          
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
    gap: "10px", // khoảng cách icon và chữ
    cursor: "pointer",
    transition: "all .3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
    e.currentTarget.style.boxShadow = "0 15px 40px rgba(59,130,246,.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "";
  }}
>
  {/* KHUNG ICON */}
  <div
    style={{
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter:isDark?"drop-shadow(0 0 10px rgba(255,255,255,0.3))": "none "
    }}
  >
    <img
      src={skill.images}
      alt={skill.name}
      width={50}
      style={{
       
        objectFit: "contain",
      }}
    />
  </div>

  {/* TEXT */}
  <div
    style={{
      fontSize: "20px",
      fontWeight: "600",
      color: "#38bdf8",
      textAlign: "center",
    }}
  >
            

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