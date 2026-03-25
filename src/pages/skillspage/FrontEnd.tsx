import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import react from "../../assets/images/react.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import js from "../../assets/images/javascript.svg";
import ts from "../../assets/images/typescript.svg";
import tw from "../../assets/images/tailwindcss.svg";

const FrontEnd = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  const skills = [
    { name: "React", images: react },
    { name: "HTML", images: html },
    { name: "CSS", images: css },
    { name: "JavaScript", images: js },
    { name: "TypeScript", images: ts },
    { name: "TailwindCSS", images: tw },
  ];

  return (
    <div style={{ marginTop: "20px", padding: "0 12px" }}>
      
      {/* TITLE */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div
          style={{
            padding: "12px 40px",
            borderRadius: "14px",
            fontSize: "22px",
            fontWeight: "600",
            color: isDark ? "#1cf704" : "#0A25F1",
            boxShadow: isDark
              ? "0 10px 40px rgba(197, 255, 214, 0.2)"
              : "0 10px 40px rgba(139, 94, 235, 0.2)",
            border: isDark ? "1px solid green" : "1px solid #0A25F1",
          }}
        >
          Front-End
        </div>
      </div>

      {/* GRID */}
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // desktop 3 cột
          gap: "20px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {skills.map((item, i) => (
          <div
            key={i}
            style={{
              border: isDark
                ? "1px solid rgba(11,237,45,0.4)"
                : "1px solid #0A25F1",
              borderRadius: "16px",
              padding: "24px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all .3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
              e.currentTarget.style.boxShadow = isDark
                ? "0 0 30px rgba(0, 255, 51, 0.3)"
                : "0 0 30px rgba(0, 89, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
              e.currentTarget.style.boxShadow = isDark
                ? "0 0 30px rgba(0, 255, 51, 0.3)"
                : "0 0 30px rgba(0, 89, 255, 0.3)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            {/* ICON */}
            <div
              style={{
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={item.images}
                alt={item.name}
                style={{
                  maxWidth: "80px",
                  maxHeight: "60px",
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                }}
              />
            </div>

            {/* NAME */}
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: isDark ? "white" : "#0A25F1",
              }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* RESPONSIVE */}
      <style>{`
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 16px !important;
    }
    .skills-grid > div {
      padding: 26px !important;
    }
  }
@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: 1fr !important;
    justify-items: center;
  }

  .skills-grid > div {
    width: 75%;          /* ⭐ nhỏ lại */
    max-width: 240px;    /* ⭐ giới hạn size đẹp */
    padding: 18px !important; /* ⭐ gọn hơn */
    margin: 0 auto;
    border-radius: 14px;
  }

  .skill-icon img {
    max-width: 60px;     /* ⭐ icon nhỏ lại */
    max-height: 50px;
  }

  .skill-name {
    font-size: 16px;     /* ⭐ text nhỏ lại */
  }
}
`}</style>
    </div>
  );
};

export default FrontEnd;