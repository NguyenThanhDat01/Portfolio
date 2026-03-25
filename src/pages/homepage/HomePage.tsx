import Skill from "./Skill";
import Text from "./Text";
import detdet from "../../assets/images/detdet.jpg";
import { Col, Row } from "antd";
import Project from "./project";

import { motion } from "framer-motion";

const HomePage = () => {
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
          <Col xs={24} md={10} style={{ textAlign: "center" }}>
            <motion.img
              src={detdet}
              alt="avatar"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.08 }}
              style={{
                width: "230px",
                borderRadius: "15px",
                objectFit: "cover",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              }}
            />
          </Col>

          {/* TEXT */}
          <Col xs={24} md={14}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Text />
            </motion.div>
          </Col>

        </Row>
      </div>

      {/* PROJECT */}
      <motion.div
        className="home-container"
        style={{ padding: "40px 120px" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Project />
      </motion.div>

      {/* SKILL */}
      <motion.div
        className="home-container"
        style={{ padding: "40px 120px" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Skill />
      </motion.div>

      {/* MOBILE RESPONSIVE */}
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