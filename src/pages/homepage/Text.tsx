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
            "TypeScript Developer"
              
            
          ],
          typeSpeed: 60,
          backSpeed: 40,
          loop: true,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

    return (
    <div>
        <h1
          style={{
      
            fontSize: "48px",
            color: "white",
            margin: 0,
            lineHeight: "2.1",
             
          }}
        >
         <span  style={{
    fontWeight: "700",
    margin: 0,
    color:isDark?"red":"#f0329e",
  
   
  }}> {t("profile.hi")}</span>
        </h1>

        <h2   style={{
    color:isDark?  "#1cf704": "#38bdf8",
    marginTop: "10px",
    fontWeight: "600",
    fontSize:'28px'
    
  }}>
         <span ref={el}></span>
        </h2>
          <div
          style={{ color: "#e5e7eb", maxWidth: "700px", fontSize: "20px" }}
          >
        <p >
          {t("profile.school")}
        </p>
         <p >
          {t("profile.department")}
        </p>
         <p >
          {t("profile.specialized")}
        </p>
        </div>
        
       <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
<Link to="/project">
  <Button
    style={{
      width: "180px",
      background: isDark
        ? "linear-gradient(90deg,#15803d,#ca8a04)"
        : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
      color: "white",
      fontWeight: "600",
      fontSize: "20px",
      padding: "20px 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  
  >
    {t("profile.view-project")}
  </Button>
</Link>
 <a href="/CV/CV_NguyenThanhDat.pdf" download>
  <Button
    style={{
      width: "180px",
      background: isDark
        ? "linear-gradient(90deg,#15803d,#ca8a04)"
        : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
      color: "white",
      fontWeight: "600",
      fontSize: "20px",
      padding: "20px 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {t("profile.download")}
  </Button>
</a>
</div>
      </div>
    )

}
export default Text