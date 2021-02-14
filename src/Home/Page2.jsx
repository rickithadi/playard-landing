import React from "react";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
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
      <div>
        <img src={phone1} alt="phone" />
      </div>
      <div>
        <img src={phone2} alt="phone" />
      </div>
      <div>
        <img src={phone3} alt="phone" />
      </div>
    </div>
  );
}

export default Page2;
