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
    <>
      <style>
        {`
        .contact-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 20px 16px;
        }

        .contact-card {
          width: 100%;
          max-width: 500px;
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: clamp(20px, 5vw, 40px);
          transition: 0.3s;
        }

        .contact-btn:hover {
          transform: translateY(-3px);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .contact-card {
            text-align: center;
          }

          .contact-info p {
            justify-content: center;
            display: flex;
            align-items: center;
            gap: 6px;
          }
        }
        `}
      </style>

      <div className="contact-container">
        <div
          className="contact-card"
          style={{
            border: isDark
              ? "1px solid green"
              : "1px solid rgba(4, 0, 255, 0.5)",
          }}
        >
          {/* BUTTON */}
          <button
            className="contact-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              background: isDark
                ? "linear-gradient(90deg,#15803d,#ca8a04)"
                : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
              border: "none",
              borderRadius: "25px",
              padding: "clamp(12px, 3vw, 16px)",
              color: "white",
              fontWeight: "600",
              fontSize: "clamp(14px, 3vw, 18px)",
              cursor: "pointer",
              marginBottom: "25px",
              transition: "0.3s",
            }}
          >
            <FaPaperPlane />
            {t("contact.a")}
          </button>

          {/* NAME */}
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "clamp(20px, 5vw, 28px)",
              fontWeight: "700",
              color: isDark ? "white" : "black",
              textAlign: "center",
            }}
          >
            Nguyễn Thành Đạt
          </h2>

          {/* INFO */}
          <div
            className="contact-info"
            style={{
              lineHeight: "2",
              fontSize: "clamp(14px, 3vw, 17px)",
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
    </>
  );
};

export default Contact;