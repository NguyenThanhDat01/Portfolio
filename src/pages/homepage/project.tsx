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

  const techs = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ];

  const projectData = [
    { title: t("project.portfolio"), desc: t("portfolio.a") },
    { title: t("project.medicare"), desc: t("booking.a") },
    { title: t("project.commerce"), desc: t("commerce-2.a") },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 60px 16px;
          box-sizing: border-box;
        }

        .project-main {
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          flex-wrap: wrap;
        }

        .project-image {
          flex: 1;
          min-width: 280px;
          display: flex;
          justify-content: center;
          animation: fadeUp 0.8s ease both;
        }

        .project-image img {
          width: 100%;
          max-width: 360px;
          border-radius: 20px;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
        }

        .project-list {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .project-card {
          width: 100%;
          max-width: 680px;
          padding: 24px;
          border-radius: 16px;
          box-sizing: border-box;
          margin: 0 auto;
          background: ${isDark ? "rgba(255,255,255,0.02)" : "#fff"};
          
          /* animation */
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.6s ease forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* stagger effect */
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }

        .project-card:hover {
          transform: translateY(-6px);
        }

        /* tablet */
        @media (max-width: 992px) {
          .project-main {
            flex-direction: column;
            gap: 40px;
          }

          .project-image img {
            max-width: 300px;
          }
        }

        /* mobile */
        @media (max-width: 768px) {
          .project-container {
            padding: 40px 12px;
          }

          .project-list {
            align-items: center;
          }

          .project-card {
            width: 92%;
            max-width: 420px;
            padding: 16px;
          }

          .project-card h3 {
            font-size: 18px !important;
          }

          .project-card p {
            font-size: 13px !important;
          }
        }
      `}</style>

      {/* TITLE */}
      <div style={{ textAlign: "center", margin: "20px 0 50px" }}>
        <h2
          style={{
            padding: "12px 30px",
            borderRadius: "50px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "24px",
            color: isDark ? "#1cf704" : "#0A25F1",
            border: isDark ? "2px solid #1cf704" : "2px solid #0A25F1",
            backgroundColor: isDark
              ? "rgba(28, 247, 4, 0.05)"
              : "rgba(10, 37, 241, 0.05)",
          }}
        >
          <FaFolderOpen /> {t("navbar.project")}
        </h2>
      </div>

      {/* CONTENT */}
      <div className="project-container">
        <div className="project-main">

          {/* IMAGE */}
          <div className="project-image">
            <img src={pro} alt="Project Mockup" />
          </div>

          {/* LIST */}
          <div className="project-list">
            {projectData.map((item, index) => (
              <div
                key={index}
                className="project-card"
                style={{
                  border: isDark
                    ? "1px solid #1cf704"
                    : "1px solid #0A25F1",
                }}
              >
                <h3
                  style={{
                    color: isDark ? "#1cf704" : "#0A25F1",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    lineHeight: "1.6",
                    fontSize: "15px",
                    marginBottom: "20px",
                    color: isDark ? "#fff" : "#333",
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    borderTop: isDark
                      ? "1px solid rgba(28,247,4,0.2)"
                      : "1px solid rgba(10,37,241,0.1)",
                    paddingTop: "15px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: isDark ? "#1cf704" : "#0A25F1",
                      marginBottom: "10px",
                      fontSize: "16px",
                    }}
                  >
                    {t("project.tech-stack")}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                    {techs.map((tech) => (
                      <span
                        key={tech.name}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "14px",
                          color: isDark ? "#fff" : "#333",
                        }}
                      >
                        <span style={{ color: isDark ? "#1cf704" : "#0A25F1" }}>
                          {tech.icon}
                        </span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Project;