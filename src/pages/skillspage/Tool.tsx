import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

import figma from "../../assets/images/figma.svg";
import git from "../../assets/images/git.svg";
import postman from "../../assets/images/postman.svg";

const Tool = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  const skills = [
    { name: "Figma", images: figma },
    { name: "GitHub", images: git },
    { name: "Postman", images: postman },
  ];

  return (
    <div style={{ marginTop: "50px", padding: "0 12px" }}>
      
      {/* TITLE */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div
          style={{
            padding: "12px 50px",
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
          Tool
        </div>
      </div>

      {/* GRID */}
      <div
        className="tool-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // desktop 3 card
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
    .tool-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 16px !important;
    }
    .tool-grid > div {
      padding: 26px !important;
    }
  }

  @media (max-width: 480px) {
    .tool-grid {
      grid-template-columns: 1fr !important;
      justify-items: center; /* ⭐ căn giữa */
    }

    .tool-grid > div {
      width: 75%;           /* ⭐ nhỏ lại */
      max-width: 240px;     /* ⭐ đẹp chuẩn mobile */
      padding: 18px !important;
      margin: 0 auto;
      border-radius: 14px;
    }

    .tool-grid img {
      max-width: 60px;      /* ⭐ icon nhỏ lại */
      max-height: 50px;
    }

    .tool-grid > div div:last-child {
      font-size: 16px;      /* ⭐ text nhỏ lại */
    }
  }
`}</style>
    </div>
  );
};

export default Tool;