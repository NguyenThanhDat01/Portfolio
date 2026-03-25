import Skill from "./Skill";
import Text from "./Text";
import detdet from "../../assets/images/detdet.jpg";
import { Col, Row } from "antd";
import Project from "./project";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      {/* FULL WIDTH WRAPPER */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        {/* HERO */}
        <div
          style={{
            minHeight: "70vh",
            padding: "40px 5%",
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
          style={{ padding: "40px 5%" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Project />
        </motion.div>

        {/* SKILL */}
        <motion.div
          style={{ padding: "40px 5%" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Skill />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;