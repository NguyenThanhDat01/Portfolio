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
        flexDirection: "column", // 👈 fix layout
        alignItems: "flex-start",
      }}
    >
      {/* TEXT */}
      <div
        style={{
          color: "#ffffff",
          
          fontSize: "18px",
          lineHeight: "1.7",
          wordBreak: "break-word",
          overflowWrap: "break-word",
           
    
        }} 
      >
         <p style={{  color: isDark ? "#38bdf8" : "#FACC15",fontWeight: "600",
    fontSize: "28px" }}>
            <h4> {t("profile.skill")}</h4>
        </p>
        <p >
          {t("about.skills")}
        </p>
         <p  style={{ color: isDark ? "#38bdf8" : "#FACC15", }}>
             <h2>{t("profile.experience")}</h2> 
        </p>

        <p>
           
          {t("about.experience")}
        </p>
          <p  style={{color: isDark ? "#38bdf8" : "#FACC15", }}>
          <h2>{t("profile.strengths")}</h2> 
        </p>
        <p >
          {t("about.strengths")}
        </p>

        <p  style={{  color: isDark ? "#38bdf8" : "#FACC15", }}>
         <h2>{t("profile.goal")}</h2> 
        </p>

        <p>
          {t("about.goal")}
        </p>
      </div>

      {/* BUTTON */}
      <div
        style={{
          display: "flex",
          gap: 15,
          marginTop: 25,
          flexWrap: "wrap",
         
        }}
      >
        <Link to="/project">
          <Button
            style={{
              width: "180px",
              background: isDark
                ? "linear-gradient(90deg,#15803d,#ca8a04)"
                : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
              color: "white",
              fontWeight: "600",
              fontSize: "18px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid white"
              
            }}
          >
            {t("profile.view-project")}
          </Button>
        </Link>

        <Button
          style={{
            width: "180px",
            background: isDark
              ? "linear-gradient(90deg,#15803d,#ca8a04)"
              : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
            color: "white",
            fontWeight: "600",
            fontSize: "18px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid white"
          }}
          href="/src/assets/CV/CV_NguyenThanhDat.pdf"
          download
        >
          {t("profile.download")}
        </Button>
      </div>
    </div>
  );
};

export default TextAbout;