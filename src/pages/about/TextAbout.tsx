import { Button } from "antd";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/theme.context";
import { Link } from "react-router-dom";

const TextAbout = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* TEXT */}
      <div
        style={{
          color: isDark ? "#e5e7eb" : "#000",
          fontSize: "clamp(14px, 2.5vw, 18px)", // 🔥 responsive
          lineHeight: "1.7",
        }}
      >
        {/* SKILL */}
        <h2
          style={{
            color: isDark ? "#38bdf8" : "#ff0000",
  
            fontSize: "clamp(20px, 4vw, 28px)",
            marginTop: 10,
          }}
        >
          {t("profile.skill")}
        </h2>
        <p>{t("about.skills")}</p>

        {/* EXPERIENCE */}
        <h2
          style={{
            color: isDark ? "#38bdf8" : "#ff0000",
            fontSize: "clamp(20px, 4vw, 28px)",
          }}
        >
          {t("profile.experience")}
        </h2>
        <p>{t("about.experience")}</p>

        {/* STRENGTH */}
        <h2
          style={{
            color: isDark ? "#38bdf8" : "#ff0000",
            fontSize: "clamp(20px, 4vw, 28px)",
          }}
        >
          {t("profile.strengths")}
        </h2>
        <p>{t("about.strengths")}</p>

        {/* GOAL */}
        <h2
          style={{
            color: isDark ? "#38bdf8" : "#ff0000",
            fontSize: "clamp(20px, 4vw, 28px)",
          }}
        >
          {t("profile.goal")}
        </h2>
        <p>{t("about.goal")}</p>
      </div>

      {/* BUTTON */}
      <div
        style={{
          display: "flex",
          gap: 15,
          marginTop: 25,
          flexWrap: "wrap", // 🔥 xuống dòng mobile
          justifyContent: "center", // 🔥 mobile đẹp hơn
        }}
      >
        <Link to="/project">
          <Button
            style={{
              width: "clamp(140px, 45vw, 180px)", // 🔥 responsive
              fontWeight: "600",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              padding: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isDark ? "#2f8026" : "#0A25F1",
              boxShadow: isDark
                ? "0 10px 40px rgba(197, 255, 214, 0.2)"
                : "0 10px 40px rgba(139, 94, 235, 0.2)",
              border: isDark
                ? "1px solid green"
                : "1px solid #0A25F1",
            }}
          >
            {t("profile.view-project")}
          </Button>
        </Link>

        <a href="/CV/CV_NguyenThanhDat.pdf" download>
          <Button
            style={{
              width: "clamp(140px, 45vw, 180px)", // 🔥 responsive
              fontWeight: "600",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              padding: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isDark ? "#2f8026" : "#0A25F1",
              boxShadow: isDark
                ? "0 10px 40px rgba(197, 255, 214, 0.2)"
                : "0 10px 40px rgba(139, 94, 235, 0.2)",
              border: isDark
                ? "1px solid green"
                : "1px solid #0A25F1",
            }}
          >
            {t("profile.download")}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default TextAbout;