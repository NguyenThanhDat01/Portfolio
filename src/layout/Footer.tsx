

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
     
        color:isDark ?"#02f6ee": "#0A25F1",
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
