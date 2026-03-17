import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import react from "../../assets/images/react.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import js from "../../assets/images/javascript.svg";
import ts from "../../assets/images/typescript.svg";

const FrontEnd = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  const skills = [
    { name: "React", images: react },
    { name: "HTML", images: html },
    { name: "CSS", images: css },
    { name: "JavaScript", images: js },
    { name: "TypeScript", images: ts },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      
      {/* TITLE */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div
          style={{
            padding: "12px 40px",
            borderRadius: "14px",
            fontSize: "22px",
            fontWeight: "600",
            color: "white",
            background: isDark
              ? "linear-gradient(90deg,#15803d,#ca8a04)"
              : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            border: "1px solid #fff"
          }}
        >
          Front-End
        </div>
      </div>

      {/* SKILLS GRID */}
      <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "40px",
            maxWidth: "1100px",
            margin: "auto",
        }}
      >
        {skills.map((item, i) => (
              <div
              key={i}
              style={{
                background: "rgba(0,0,0,0.55)",
                border: isDark
                  ? "1px solid rgba(11,237,45,0.4)"
                  : "1px solid rgba(147,51,234,0.5)",
                borderRadius: "16px",
                padding: "30px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all .3s ease",
                backdropFilter: "blur(10px)",
               
                
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
                e.currentTarget.style.boxShadow = isDark
                ? "0 0 30px rgba(0, 255, 51, 0.3)"
                :"0 0 30px rgba(255,0,150,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >

              {/* ICON BOX */}
              <div
                style={{
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                  transform: "scale(1.05)"
                }}
              >
                <img
                  src={item.images}
                  alt={item.name}
                  style={{
                    maxWidth: "90px",
                    maxHeight: "70px",
                    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
                  }}
                />
              </div>

              {/* NAME */}
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                {item.name}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontEnd;