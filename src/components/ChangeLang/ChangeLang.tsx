import { Button } from "antd";

import { LngContext } from "../../context/lng.context";
import { useContext } from "react";
import "flag-icons/css/flag-icons.min.css";
const ChangeLang = () => {
  const { lng, toggleLanguage } = useContext(LngContext)!;
  return (
    <Button
      onClick={toggleLanguage}
      style={{
        height: 40,
        padding: "0 14px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(255,255,255,0.15)",
        color: "#fff",
        transition: "all 0.25s",
        
      }}
    >
      <span   style={{ cursor: "pointer", fontSize: 20 }}>
         {lng === "vi" ? (
    <span className="fi fi-vn"></span>
  ) : (
    <span className="fi fi-gb"></span>
  )}
  </span>
    </Button>
  );
};
export default ChangeLang;
