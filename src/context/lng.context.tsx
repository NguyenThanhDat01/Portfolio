import { createContext, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type LngContextType = {
  lng: string;
  toggleLanguage: () => void;
};

type LngProviderProps = {
  children: ReactNode;
};

export const LngContext = createContext<LngContextType | null>(null);

export const LngtProvider = ({ children }: LngProviderProps) => {
  const [lng, setLng] = useState(localStorage.getItem("lng") || "vi");
const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng]);
 const toggleLanguage = () => {
  let newLang = "";

  if (i18n.language === "vi") {
    newLang = "en";
  } else {
    newLang = "vi";
  }

  i18n.changeLanguage(newLang);
  setLng( newLang)
    localStorage.setItem("lng", newLang)
};

  return (
    <LngContext.Provider value={{ lng, toggleLanguage }}>
      <div>{children}</div>
    </LngContext.Provider>
  );
};