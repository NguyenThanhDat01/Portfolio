import FrontEnd from "./FrontEnd";
import Tool from "./Tool";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // chạy 1 lần
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        minHeight: "70vh",
        padding: "40px 16px",
        maxWidth: "1200px",
        margin: "auto",
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

    </div>
  );
};

export default SkillPage;