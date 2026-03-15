import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import {
  SiMui,
  SiNginx,
  SiStrapi,
  SiTypescript,
  SiDocker,
  SiBootstrap,
  SiFigma,
  SiFirebase,
  SiGo
} from "react-icons/si";
import { FaCode, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Skill = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();
  const skill = [

  
    { name: "Figma", imges: <img src='src/assets/imges/figma.svg' width={50}  /> },
    { name: "React", imges: <img src='src/assets/imges/react.svg' width={50}  />  },
    { name: "HTML", imges: <img src='src/assets/imges/html.svg' width={50}  />  },
    { name: "JavaScript", imges: <img src='src/assets/imges/javascript.svg' width={50}  />  },
    { name: "TypeScript", imges: <img src='src/assets/imges/typescript.svg' width={50}  />  },
    { name: "GitHup", imges: <img src='src/assets/imges/git.svg' width={50}  />  },
    { name: "Antd", imges: <img src='src/assets/imges/antd.svg' width={50}  />  },
       { name: "Postman", imges: <img src='src/assets/imges/postman.svg' width={50}  />  },
   
   
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
              {skill.imges}
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