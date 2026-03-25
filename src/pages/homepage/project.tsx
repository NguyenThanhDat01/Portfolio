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
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* ===== CONTAINER CHÍNH ===== */
        .project-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 16px;
          box-sizing: border-box;
        }

        .project-main {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: center; /* Căn giữa toàn bộ nội dung */
          align-items: center;     /* Căn giữa theo chiều dọc */
          gap: 60px;               /* Khoảng cách giữa ảnh và list */
          flex-wrap: wrap;
        }

        /* ===== PHẦN HÌNH ẢNH ===== */
        .project-image {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
        }

        .project-image img {
          width: 100%;
          max-width: 380px;
          height: auto;
          border-radius: 20px;
          animation: float 4s ease-in-out infinite;
          /* Đổ bóng cho ảnh thêm sinh động */
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1));
        }

        /* ===== PHẦN DANH SÁCH CARD ===== */
        .project-list {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: center; /* Đảm bảo các card con nằm giữa cột */
          gap: 25px;
        }

        /* ===== CHI TIẾT CARD ===== */
        .project-card {
          width: 100%;
          max-width: 450px; /* Thu nhỏ card lại theo ý bạn */
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box;
          background: ${isDark ? "rgba(255,255,255,0.02)" : "#fff"};
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
        }

        /* ===== MOBILE & TABLET ===== */
        @media (max-width: 992px) {
          .project-main {
            flex-direction: column;
            gap: 40px;
          }
          
          .project-image, .project-list {
            flex: none;
            width: 100%;
          }

          .project-image img {
            max-width: 300px;
          }
        }
        `}
      </style>

      {/* TIÊU ĐỀ PHẦN DỰ ÁN */}
      <div style={{ textAlign: "center", marginBottom: "50px", marginTop: "20px" }}>
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
            backgroundColor: isDark ? "rgba(28, 247, 4, 0.05)" : "rgba(10, 37, 241, 0.05)",
          }}
        >
          <FaFolderOpen /> {t("navbar.project")}
        </h2>
      </div>

      {/* NỘI DUNG CHÍNH */}
      <div className="project-container">
        <div className="project-main">
          
          {/* CỘT TRÁI: ẢNH */}
          <div className="project-image">
            <img src={pro} alt="Project Mockup" />
          </div>

          {/* CỘT PHẢI: DANH SÁCH DỰ ÁN */}
          <div className="project-list">
            {projectData.map((item, index) => (
              <div
                key={index}
                className="project-card"
                style={{
                  border: isDark ? "1px solid #1cf704" : "1px solid #0A25F1",
                }}
              >
                <h3
                  style={{
                    color: isDark ? "#1cf704" : "#0A25F1",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginTop: 0,
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ 
                  lineHeight: "1.6", 
                  fontSize: "15px", 
                  opacity: 0.9,
                  marginBottom: "20px" 
                }}>
                  {item.desc}
                </p>

                <div style={{ borderTop: isDark ? "1px solid rgba(28,247,4,0.2)" : "1px solid rgba(10,37,241,0.1)", paddingTop: "15px" }}>
                   <p style={{
                      fontWeight: 700,
                      color: isDark ? "#1cf704" : "#0A25F1",
                      marginBottom: "10px",
                      fontSize: "16px",
                    }}>
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
                          <span style={{ color: isDark ? "#1cf704" : "#0A25F1" }}>{tech.icon}</span>
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