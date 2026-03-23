import { useContext } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { theme } = useContext(ThemeContext)!;
  const { t } = useTranslation();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(10px, 4vw, 40px)", // 🔥 tránh sát mép mobile
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "clamp(20px, 5vw, 40px)", // 🔥 responsive padding
          maxWidth: "450px",
          width: "100%",
          transition: "0.3s",
          border: isDark
            ? "1px solid green"
            : "1px solid rgba(4, 0, 255, 0.5)",
        }}
      >
        {/* BUTTON */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%", // 🔥 full width mobile
            background: isDark
              ? "linear-gradient(90deg,#15803d,#ca8a04)"
              : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
            border: "none",
            borderRadius: "25px",
            padding: "clamp(12px, 3vw, 16px)",
            color: "white",
            fontWeight: "600",
            fontSize: "clamp(14px, 3vw, 18px)", // 🔥 responsive
            cursor: "pointer",
            marginBottom: "25px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaPaperPlane />
          {t("contact.a")}
        </button>

        {/* NAME */}
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "clamp(20px, 5vw, 28px)", // 🔥 responsive
            fontWeight: "700",
            color: isDark ? "white" : "black",
            textAlign: "center", // 🔥 mobile đẹp hơn
          }}
        >
          Nguyễn Thành Đạt
        </h2>

        {/* INFO */}
        <div
          style={{
            lineHeight: "2",
            fontSize: "clamp(14px, 3vw, 17px)", // 🔥 responsive
            color: isDark ? "white" : "black",
          }}
        >
          <p>
            <FaPhone /> {t("contact.b")}: 0938631259
          </p>

          <p>
            <FaMapMarkerAlt /> {t("contact.c")}: Hồ Chí Minh
          </p>

          <p>
            <FaEnvelope /> Email:{" "}
            <a
              href="mailto:nguyenthanhdat@gmail.com"
              style={{ color: isDark ? "white" : "black" }}
            >
              nguyenthanhdat0938xxx@gmail.com
            </a>
          </p>

          <p>
            <FaGithub /> GitHub:{" "}
            <a
              href="https://github.com/NguyenThanhDat01"
              target="_blank"
              rel="noreferrer"
              style={{ color: isDark ? "white" : "black" }}
            >
              github.com/NguyenThanhDat01
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;