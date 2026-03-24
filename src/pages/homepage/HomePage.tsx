import Skill from "./Skill";
import Text from "./Text";

import detdet from "../../assets/images/detdet.jpg";
import { Col, Row } from "antd";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Project from "./project";




const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out-cubic",
      offset: 120,
    });


    AOS.refresh();

  }, []);

  return (
    <>
      <div
        className="home-container"
        style={{
          minHeight: "60vh",
          padding: "40px 120px",
        }}
      >
        <Row align="middle" gutter={[20, 20]}>
          
          {/* IMAGE */}
          <Col 
            xs={24} 
            md={10} 
            style={{ textAlign: "center" }}
            data-aos="fade-right"
          >
            <img
              src={detdet}
              alt="avatar"
              style={{
                width: "230px",
                borderRadius: "15px",
                objectFit: "cover",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </Col>

          {/* TEXT */}
          <Col 
            xs={24} 
            md={14}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Text />
          </Col>

        </Row>
      </div>

      {/* PROJECT */}
      <div
        className="home-container"
        style={{ padding: "40px 120px" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Project/>
      </div>

      {/* SKILL */}
      <div
        className="home-container"
        style={{ padding: "40px 120px" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Skill />
      </div>

      {/* MOBILE */}
      <style>{`
        @media (max-width: 768px) {
          .home-container {
            padding: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;