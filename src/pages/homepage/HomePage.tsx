import Skill from "./Skill";
import Text from "./Text";

import detdet from "../../assets/images/detdet.jpg";
import { Col, Row } from "antd";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          padding: "40px 120px",
        }}
      >
        <Row align="middle" gutter={20}>
          
          {/* IMAGE */}
          <Col xs={24} md={10} style={{ textAlign: "center" }}>
            <img
              src={detdet}
              style={{
                width: "380px",
                borderRadius: "15px",
                objectFit: "cover",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5)"
              }}
            />
          </Col>

          {/* TEXT */}
          <Col xs={24} md={14}>
            <div
             
            >
              <Text />
            </div>
          </Col>

        </Row>
      </div>

      {/* SKILL SECTION */}
      <div>
        <Skill />
      </div>
    </>
  );
};

export default HomePage;