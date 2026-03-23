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
      backgroundImage: "linear-gradient(90deg, rgb(248, 237, 248), rgb(248, 237, 248)",
      color: "#000",
      minHeight: "100vh",
      width: "100%",
     
    };
  } else {
    themeStyle = {
    backgroundImage:  "linear-gradient(70deg, #150B14, #21091E,#150B14)",
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