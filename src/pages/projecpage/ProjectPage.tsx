import BookingCare from "./BookingCare";
import CommerceProject2 from "./E-Commerce.Project2";
import Portfolio from "./Portfolio";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out-cubic",
      offset: 120,
    });

    AOS.refresh(); // 🔥 fix animation
  }, []);

  return (
    <div className="project-container">

      <div className="project-wrapper">
        
        <div data-aos="zoom-in-up">
          <Portfolio />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="150">
          <BookingCare />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="300">
          <CommerceProject2 />
        </div>

      </div>

      {/* STYLE */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .project-container {
          width: 100%;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          padding: 20px 80px;
          overflow-x: hidden;
        }

        .project-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 80px;
          width: 100%;
          max-width: 1200px;
        }

        .project-wrapper > div {
          flex: 0 0 auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* 🔥 hover effect */
        .project-wrapper > div:hover {
          transform: translateY(-10px) scale(1.03);
        }

        /* ===== TABLET ===== */
        @media (max-width: 1024px) {
          .project-container {
            padding: 20px 40px;
          }

          .project-wrapper {
            gap: 40px;
          }

          .project-wrapper > div {
            width: calc(50% - 20px);
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .project-container {
            padding: 20px 0;
          }

          .project-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 25px;
          }

          .project-wrapper > div {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectPage;