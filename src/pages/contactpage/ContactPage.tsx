import { useContext } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,

  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { ThemeContext } from "../../context/theme.context";

const Contact = () => {
      const { theme } = useContext(ThemeContext)!;
     
    
      const isDark = theme === "dark";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
         
          borderRadius: "20px",
          padding: "40px",
          color: "white",
          maxWidth: "450px",
          width: "100%",
          boxShadow: isDark
                ? "0 0 30px rgba(0, 255, 51, 0.3)"
                :"0 0 30px rgba(255,0,150,0.3)",
          transition: "0.3s",
           border: isDark
                ? "1px solid green"
                : "1px solid rgba(147,51,234,0.5)",
        }}
      >
        {/* BUTTON */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
             background: isDark
                ? "linear-gradient(90deg,#15803d,#ca8a04)"
                : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
            border: "none",
            borderRadius: "25px",
            padding: "14px 28px",
            color: "white",
            fontWeight: "600",
            fontSize: "18px",
            cursor: "pointer",
            marginBottom: "25px",
            boxShadow: "0 0 15px rgba(147,51,234,0.6)",
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
          Liên hệ ngay
        </button>

        {/* NAME */}
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Nguyễn Thành Đạt
        </h2>

        {/* INFO */}
        <div
          style={{
            lineHeight: "2",
            fontSize: "17px",
          }}
        >
          <p>
            <FaPhone /> Số điện thoại: 0938631259
          </p>

          <p>
            <FaMapMarkerAlt /> Địa chỉ: Hồ Chí Minh
          </p>

          <p>
            <FaEnvelope /> Email:{" "}
            <a
              href="mailto:nguyenthanhdat@gmail.com"
              style={{ color: "#ffffff" }}
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
              style={{ color: "#ffffff" }}
            >
              https://github.com/NguyenThanhDat01"
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;