import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { useTranslation } from "react-i18next";

import ec2 from "../../assets/images/ec2.jpg";
import { Button } from "antd";
import { FaCss3Alt, FaGithub, FaPinterest, FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";


const CommerceProject2 = () => {
  const { theme } = useContext(ThemeContext)!;
  const { t } = useTranslation();

  const isDark = theme === "dark";

  const projects = [
    {
      name: t("project.keyboard-mouse"),
      image: ec2,
    },
  ];
  const techs = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <TbBrandTypescript />},
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "REST API", icon: <FaPinterest /> }
];

  return (
    <div style={{ marginTop: "20px", padding: "0 20px" }}>
      
      {/* TITLE */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div
          style={{
            padding: "14px 55px",
            borderRadius: "14px",
            fontSize: "22px",
            fontWeight: "600",
            color: "white",
            background: isDark
              ? "linear-gradient(90deg,#15803d,#ca8a04)"
              : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
            border: "1px solid #fff",
          }}
        >
          {t("project.commerce")}
        </div>
      </div>

      {/* PROJECT LIST */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {projects.map((item, i) => (
          <div
            key={i}
            style={{
               background: "rgba(255,255,255,0.05)",
              border: isDark
                ? "1px solid green"
                : "1px solid rgba(147,51,234,0.5)",
              borderRadius: "18px",
              padding: "35px",
              backdropFilter: "blur(14px)",
                boxShadow: isDark
                ? "0 0 30px rgba(0, 255, 51, 0.3)"
                :"0 0 30px rgba(255,0,150,0.3)",

              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "420px",
                height: "350px",
                borderRadius: "14px",
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
            />

            {/* TEXT */}
            <div style={{ flex: 1, minWidth: "250px" }}>
              
              {/* TITLE */}
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                   color:isDark?  "#1cf704": "#f290ef",
                  marginBottom: "14px",
                }}
              >
                {item.name}
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontWeight: 700,
                  color:isDark?  "#22d3ee": "#facc15",
                  marginBottom: "8px",
                  fontSize: "20px",
                }}
              >
                {t("project.description")}
              </p>

              <p
                style={{
                  color: "#e5e7eb",
                  lineHeight: "1.7",
                  marginBottom: "18px",
                   fontSize: "16px",
                }}
              >
                {t("commerce-2.a")}
              </p>

              {/* TASKS */}
              <p
                style={{
                  fontWeight: 700,
                  color:isDark?  " #22d3ee": " #facc15",
                  marginBottom: "10px",
                  fontSize: "20px",
                }}
              >
                {t("project.tasks")}
              </p>

              <ul
                style={{
                  paddingLeft: "20px",
                  color: "#e5e7eb",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              >
                <li>{t("commerce-2.b")}</li>
                <li>{t("commerce-2.c")}</li>
                <li>{t("commerce-2.e")}</li>
                <li>{t("commerce-2.f")}</li>
                <li>{t("commerce-2.g")}</li>
                <li>{t("commerce-2.h")}</li>
                <li>{t("commerce-2.i")}</li>
              </ul>

              {/* TECH STACK */}
              <p
                style={{
                  fontWeight: 700,
                  color:isDark?  "#22d3ee": " #facc15",
                  marginBottom: "20px",
                  fontSize: "20px",
                }}
              >
                {t("project.tech-stack")}
              </p>
              <div style={{
    display: "flex",
    flexWrap: "wrap",
    
    gap: "10px"
  }}>
         {techs.map((tech) => (
   
              <span
                key={tech.name}
                style={{
                  background: isDark
                    ? "linear-gradient(90deg,#15803d,#ca8a04)"
                    : "linear-gradient(90deg,#2563eb,#9333ea,#db2777)",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                {tech.icon}
                {tech.name}
              </span>
            ))}
            </div>
            <div/>
              <p
                style={{
                  fontWeight: 700,
                  color:isDark?  "#22d3ee": "  #facc15",
                  marginBottom: "8px",
                  fontSize: "20px",
                }}
              >
                GitHup
              </p>
                 <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
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
    href="https://github.com/nthuwng/key-nexus-fe"
  >
    <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}
>
  <FaGithub size={20} />
  <span>GitHub</span>
</div>
  </Button>

</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommerceProject2;