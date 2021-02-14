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
      <div className="ant-row">
        <div className="ant-col ant-col-xs-24 ant-col-xl-8">
          <img src={phone1} alt="phone" />
        </div>
        <div className="ant-col ant-col-xs-24 ant-col-xl-8">
          <img src={phone2} alt="phone" />
        </div>
        <div className="ant-col ant-col-xs-24 ant-col-xl-8">
          <img src={phone3} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default Page2;
