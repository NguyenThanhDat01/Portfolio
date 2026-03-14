import { Button } from "antd";

import { LngContext } from "../../context/lng.context";
import { useContext } from "react";

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
      {lng.toUpperCase()}
    </Button>
  );
};
export default ChangeLang;
