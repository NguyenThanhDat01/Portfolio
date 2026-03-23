import { Button } from "antd";
import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from "typed.js";
import { ThemeContext } from "../../context/theme.context";
import { Link } from "react-router-dom";

const Text = () => {
  const { t } = useTranslation();
  const el = useRef(null);
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "TypeScript Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          fontSize: "clamp(24px, 5vw, 30px)", // 🔥 responsive
          color: "white",
          margin: 0,
          lineHeight: "1.5",
        }}
      >
        <span
          style={{
            fontWeight: "700",
            color: isDark ? "red" : "#001eff",
          }}
        >
          {t("profile.hi")}
        </span>
      </h1>

      {/* TYPED */}
      <h2
        style={{
          color: isDark ? "#1cf704" : "#ff0033",
          marginTop: "10px",
          fontWeight: "600",
          fontSize: "clamp(18px, 4vw, 24px)", // 🔥 responsive
        }}
      >
        <span ref={el}></span>
      </h2>

      {/* DESC */}
      <div
        style={{
          color: isDark ? "#ffffff" : "#000000",
          maxWidth: "700px",
          fontSize: "clamp(14px, 2.5vw, 18px)", // 🔥 responsive
          lineHeight: "1.7",
        }}
      >
        <p>{t("profile.school")}</p>
        <p>{t("profile.department")}</p>
        <p>{t("profile.specialized")}</p>
      </div>

      {/* BUTTON */}
      <div
        style={{
          display: "flex",
          gap: 15,
          marginTop: 20,
          flexWrap: "wrap", // 🔥 mobile xuống dòng
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
              width: "clamp(140px, 45vw, 180px)",
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

export default Text;