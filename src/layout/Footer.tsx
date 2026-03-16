

import { useTranslation } from "react-i18next";
import { ThemeContext } from "../context/theme.context";
import { useContext } from "react";


const AppFooter = () => {
  const { theme } = useContext(ThemeContext)!;
  const isDark = theme === "dark";
    const { t } = useTranslation();

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
     {t("footer.portfolio")}
    </footer>
  );
};

export default AppFooter;
