

import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";


const AppFooter = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";


  return (
    <footer
      style={{
        background: isDark ? "rgba(0, 0, 0, 0.5)" : "transparent",
        color:isDark ?"#02f6ee": "#fcfcfc",
        padding: "20px 80px",
        boxShadow: "none",
        fontSize: "20px",
        fontWeight: 600,
         textAlign: "center",
          

      }}
    >
     PROTFOLIO-NguyenThanhDat
    </footer>
  );
};

export default AppFooter;
