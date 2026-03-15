import { createContext, ReactNode, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    let newTheme;

    if (theme === "dark") {
      newTheme = "light";
    } else {
      newTheme = "dark";
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  let themeStyle = {};

  if (theme === "light") {
    themeStyle = {
      backgroundColor: "#ffffff",
      color: "#000000",
      minHeight: "100vh",
      width: "100%",
    };
  } else {
    themeStyle = {
    backgroundImage: "rgba(0,0,0,0.8)",
    color: "#ffffff",
      minHeight: "100vh",
      width: "100%",
    };
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyle}>{children}</div>
    </ThemeContext.Provider>
  );
};