import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";

import f1 from "../../assets/images/pflo1.gif";
import f2 from "../../assets/images/pflo2.gif";
import f3 from "../../assets/images/pflo3.gif";
import { Button } from "antd";
import { FaCss3Alt, FaDemocrat, FaGithub, FaReact } from "react-icons/fa";

import { TbBrandTypescript } from "react-icons/tb";

const Portfolio = () => {
  const { theme } = useContext(ThemeContext)!;
  const { t } = useTranslation();

  const isDark = theme === "dark";

  const techs = [
    { name: "React", icon: <FaReact /> },
   { name: "TyeScript", icon: <TbBrandTypescript />},
    { name: "CSS", icon: <FaCss3Alt /> },
  ];

  return (
    <div style={{ marginTop: "20px", padding: "0 20px" }}>
      {/* TITLE */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div
          style={{
            padding: "14px 55px",
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
          {t("project.portfolio")}
        </div>
      </div>

      {/* CARD */}
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          border: isDark ? "1px solid green" : "1px solid #0A25F1",
          borderRadius: "18px",
          padding: "35px",
          backdropFilter: "blur(14px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {/* IMAGE ROW */}
        <div
          className="image-row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img src={f1} alt="Booking" style={{ width: "200px", height: "160px", borderRadius: "14px", objectFit: "cover", boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }} />
          <img src={f2} alt="Healthcare" style={{ width: "200px", height: "160px", borderRadius: "14px", objectFit: "cover", boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }} />
          <img src={f3} alt="Healthcare" style={{ width: "200px", height: "160px", borderRadius: "14px", objectFit: "cover", boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }} />
        </div>

        {/* TEXT CONTENT */}
        <div style={{ width: "100%" }}>
          <div style={{ fontSize: "28px", fontWeight: "700", color: isDark ? "#1cf704" : " #0A25F1", marginBottom: "14px" }}>
            {t("project.portfolio")}
          </div>

          <p style={{ fontWeight: 700, color: isDark ? "#22d3ee" : " #ff0000", marginBottom: "8px", fontSize: "20px" }}>
            {t("project.portfolio")}
          </p>

          <p style={{ color: isDark ? "#e5e7eb" : "#000000", lineHeight: "1.7", marginBottom: "18px", fontSize: "16px" }}>
            {t("portfolio.a")}
          </p>

          {/* TASKS */}
          <p style={{ fontWeight: 700, color: isDark ? " #22d3ee" : " #ff0000", marginBottom: "10px", fontSize: "20px" }}>
            {t("project.tasks")}
          </p>

          <ul style={{ paddingLeft: "20px", color: isDark ? "#e5e7eb" : "#000000", lineHeight: "1.8", marginBottom: "20px", fontSize: "16px" }}>
            <li>{t("portfolio.b")}</li>
            <li>{t("portfolio.c")}</li>
            <li>{t("portfolio.e")}</li>
            <li>{t("portfolio.f")}</li>
            <li>{t("portfolio.g")}</li>
            <li>{t("portfolio.h")}</li>
            <li>{t("portfolio.i")}</li>
          </ul>

          {/* TECH STACK */}
          <p style={{ fontWeight: 700, color: isDark ? "#22d3ee" : " #ff0000", marginBottom: "10px", fontSize: "20px" }}>
            {t("project.tech-stack")}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {techs.map((tech) => (
              <span key={tech.name} style={{ padding: "6px 10px", borderRadius: "8px", fontSize: "16px", color: isDark ? "white" : "black", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>

          <p style={{ fontWeight: 700, color: isDark ? "#22d3ee" : " #ff0000", marginBottom: "6px", fontSize: "20px" }}>
            GitHup
          </p>

          <div style={{ display: "flex", marginTop: "20px" , gap:"10px"}}>
            <Button
              style={{
                width: "180px",
                color: "black",
                fontWeight: "600",
                fontSize: "20px",
                padding: "20px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              href="https://github.com/NguyenThanhDat01/Frontend-medicare_booking_app"
            >
              <FaGithub size={20} style={{ marginRight: "8px" }} />
              GitHub
            </Button>
            <Button
              style={{
                width: "180px",
                color: "black",
                fontWeight: "600",
                fontSize: "20px",
                padding: "20px 25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               
              }}
              href="https://nguyenthanhdatportfolio-nqzav3mrn.vercel.app/"
            >
              <FaDemocrat  size={20} style={{ marginRight: "8px" }} />
              Demo
            </Button>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        /* MOBILE */
        @media (max-width: 768px) {
          .image-row {
            flex-direction: column !important;
            align-items: center !important;
          }

       .image-row img {
  width: 65vw !important;   /* nhỏ lại */
  max-width: 240px;         /* không cho quá to */
  height: auto !important;
  max-height: 180px;        /* thấp lại cho gọn */
}
        }

        /* TABLET */
        @media (min-width: 769px) and (max-width: 1024px) {
          .image-row img {
            width: 45% !important;
            height: auto !important;
          }
        }

        /* DESKTOP */
        @media (min-width: 1025px) {
          .image-row img {
            width: 200px !important;
            height: 160px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;