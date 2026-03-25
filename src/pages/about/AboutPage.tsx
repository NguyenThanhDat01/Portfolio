import { useContext } from "react";
import avatar from "../../assets/images/detdet.jpg";

import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TextAbout from "./TextAbout";

const AboutPage = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";

  return (
    <div
      className="about-container"
      style={{
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        padding: "clamp(16px, 5vw, 40px)",
        maxWidth: "1000px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* GRID */}
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "center",
          justifyItems: "center",
          gap: "40px",
        }}
      >
        {/* TEXT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="about-image"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={avatar}
            alt="avatar"
            style={{
              width: "clamp(180px, 60%, 280px)",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <motion.div
        style={{ marginTop: "40px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <TextAbout />
      </motion.div>
    </div>
  );
};

export default AboutPage;