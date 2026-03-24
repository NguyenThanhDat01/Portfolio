import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";
import { FaCss3Alt, FaFolderOpen, FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import pro from "../../assets/images/pro.png";

const Project = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
  const { t } = useTranslation();

  const cardStyle = {
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
    border: isDark ? "1px solid green" : "1px solid #0A25F1",
  };

  const dateStyle = {
    color: isDark ? "#1cf704" : "#0A25F1",
    fontSize: "22px",
    fontWeight: "bold",
  };

  const techs = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ];

  return (
    <>
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .project-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .project-image {
          flex: 1;
          text-align: center;
        }

        .project-image img {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 14px;
          animation: float 3s ease-in-out infinite;
        }

        .project-list {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* 🔥 HOVER XỊN */
        .project-card {
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        /* ===== TABLET ===== */
        @media (max-width: 1024px) {
          .project-main {
            gap: 30px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .project-main {
            flex-direction: column;
          }

          .project-image {
            order: 1;
          }

          .project-list {
            order: 2;
            width: 100%;
          }

          .project-image img {
            max-width: 280px;
          }
        }
        `}
      </style>

      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            padding: "10px 34px",
            borderRadius: "12px",
            display: "inline-block",
            color: isDark ? "#1cf704" : "#0A25F1",
            border: isDark ? "1px solid green" : "1px solid #0A25F1",
          }}
        >
          <FaFolderOpen /> {t("navbar.project")}
        </h2>
      </div>

      {/* MAIN */}
      <div className="project-main">

        {/* IMAGE */}
        <div className="project-image">
          <img src={pro} alt="project" />
        </div>

        {/* LIST */}
        <div className="project-list">

          {[ 
            { title: t("project.portfolio"), desc: t("portfolio.a") },
            { title: t("project.medicare"), desc: t("booking.a") },
            { title: t("project.commerce"), desc: t("commerce-2.a") }
          ].map((item, index) => (
            <div key={index} style={cardStyle} className="project-card">
              <p style={dateStyle}>{item.title}</p>
              <p>{item.desc}</p>

              <p
                style={{
                  fontWeight: 700,
                  color: isDark ? "#1cf704" : "#0A25F1",
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
                {t("project.tech-stack")}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {techs.map((tech) => (
                  <span
                    key={tech.name}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      color: isDark ? "white" : "black",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Project;