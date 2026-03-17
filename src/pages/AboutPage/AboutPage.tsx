import { useContext} from "react";
import avatar from "../../assets/images/avatar.svg";
import TextAbout from "./TextAbout";
import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";

const IntroducePage = () => {
    const { t } = useTranslation();
       
       const { theme } = useContext(ThemeContext)!;
        const isDark = theme === "dark";
  return (
    <>
<div style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
           border: isDark
                ? "1px solid green"
                : "1px solid rgba(147,51,234,0.5)",
          borderRadius: "20px",
          padding: "20px",
        
         
          width: "100%",
          boxShadow: isDark
                ? "0 0 30px rgba(0, 255, 51, 0.3)"
                :"0 0 30px rgba(255,0,150,0.3)",
          transition: "0.3s",
        }}>
  <div
      style={{
        minHeight: "60vh",
        padding: "10px 1px",
        display: "grid",
        gridTemplateColumns: "2.4fr 1fr", // 👈 chia 2 cột đều
        alignItems: "center",
        gap: "100px",
       
        color: "#fff",
      }}
    >
      
      {/* TEXT */}
      <div>
          <h1
  style={{
    fontSize: "40px",
    color: "white",
    margin: 0,
    lineHeight: "1.4",
    maxWidth: "700px" // 👈 giảm lại cho đẹp
  }}
>
  <span
    style={{
      fontWeight: "700",
      color: isDark ? "red" : "#f0329e",
      display: "block",            // 👈 bắt buộc
      wordBreak: "break-word",
      overflowWrap: "break-word",
      whiteSpace: "pre-line"       // 👈 hỗ trợ \n nếu có
    }}
  >
    {t("about.hi")}
  </span>
</h1>

<h2
  style={{
    color: isDark ? "#1cf704" : "#38bdf8",
    marginBottom: "10px",
    fontWeight: "600",
    fontSize: "28px"
  }}
>
  
  Frontend Developer
</h2>

<div
  style={{
    color: "#e5e7eb",
    maxWidth: "650px",
    fontSize: "18px",
    lineHeight: "1.7",
    wordBreak: "break-word",
    overflowWrap: "break-word"
  }}
>
  <p style={{ marginBottom: "10px" }}>
    {t("about.school")}
  </p>

  <p style={{ marginBottom: "10px" }}>
    {t("about.department")}
  </p>

  <p>
    {t("about.specialized")}
  </p>
</div>
      </div>

      {/* IMAGE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // 👈 canh giữa đẹp hơn flex-end
        }}
      >
        <img
          src={avatar}
          style={{
            width: "500px",
            transform: "translateY(30px)",
          }}
        />
      </div>

    </div>
    <div>
      <TextAbout/>
    </div>

</div>
    
    </>
  );
};

export default IntroducePage;