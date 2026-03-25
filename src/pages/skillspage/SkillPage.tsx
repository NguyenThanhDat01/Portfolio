import FrontEnd from "./FrontEnd";
import Tool from "./Tool";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="skill-page-container" // ⭐ thêm class
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        minHeight: "70vh",
        padding: "40px 16px",
        maxWidth: "1200px",
        margin: "auto",
        width: "100%", // ⭐ fix lệch mobile
      }}
    >
      
      {/* Frontend */}
      <div data-aos="fade-up">
        <FrontEnd />
      </div>

      {/* Tools */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Tool />
      </div>

      {/* MOBILE FIX */}
      <style>{`
        @media (max-width: 480px) {
          .skill-page-container {
            padding: 40px 8px !important; /* ⭐ giảm padding tránh lệch */
          }
        }
      `}</style>

    </div>
  );
};

export default SkillPage;