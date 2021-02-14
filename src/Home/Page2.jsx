import React from "react";
import { Button, Row, Col } from "antd";
import phone1 from "./component/Frame1.png";
import phone2 from "./component/Frame2.png";
import phone3 from "./component/Frame3.png";

function Page2() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col lg={8} sm={24} xs={24} style={{ textAlign: "center" }}>
          <img
            src={phone1}
            style={{ width: "100%", height: "100%", padding: "20px" }}
          />
        </Col>
        <Col lg={8} sm={24} xs={24} style={{ textAlign: "center" }}>
          <img
            src={phone2}
            style={{ width: "100%", height: "100%", padding: "20px" }}
          />
        </Col>
        <Col lg={8} sm={24} xs={24} style={{ textAlign: "center" }}>
          <img
            src={phone3}
            style={{ width: "100%", height: "100%", padding: "20px" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Page2;
