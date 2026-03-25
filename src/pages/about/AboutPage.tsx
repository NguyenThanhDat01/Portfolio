import { useContext, useEffect } from "react";
import avatar from "../../assets/images/detdet.jpg";

import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import TextAbout from "./TextAbout";

const AboutPage = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      style={{
        backdropFilter: "blur(12px)",
        borderRadius: "20px",

        padding: "clamp(16px, 5vw, 40px)",
        maxWidth: "1000px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",

        /* 🔥 FIX QUAN TRỌNG */
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* GRID LAYOUT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "center",
          justifyItems: "center", // 🔥 center từng item
          gap: "40px",
        }}
      >
        {/* TEXT */}
        <div data-aos="fade-right">
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 40px)",
              color: "white",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            <span
              style={{
                fontWeight: "700",
                color: isDark ? "red" : "#0400ff",
                display: "block",
                whiteSpace: "pre-line",
              }}
            >
              {t("about.hi")}
            </span>
          </h1>

          <h2
            style={{
              color: isDark ? "#1cf704" : "rgb(255, 0, 0)",
              margin: "10px 0",
              fontWeight: "600",
              fontSize: "clamp(20px, 4vw, 28px)",
            }}
          >
            Frontend Developer
          </h2>

          <div
            style={{
              color: isDark ? "#e5e7eb" : "#000000",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              lineHeight: "1.7",
            }}
          >
            <p>{t("about.school")}</p>
            <p>{t("about.department")}</p>
            <p>{t("about.specialized")}</p>
          </div>
        </div>

        {/* IMAGE */}
        <div
          data-aos="fade-left"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: "clamp(180px, 60%, 280px)",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div data-aos="fade-up" style={{ marginTop: "40px" }}>
        <TextAbout />
      </div>
    </div>
  );
};

export default AboutPage;