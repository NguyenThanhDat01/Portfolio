
import { useContext } from "react";
import { AiFillSun } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/theme.context";



const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  
      const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      style={{
        height: 40,
        padding: "0 14px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(255,255,255,0.15)",
        color: isDark ?"#ffffff": "#080808",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.25)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.15)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {theme === "light" ? <FaRegMoon /> : <AiFillSun />}
    </button>
  );
};

export default ThemeSwitcher;