import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="banner-wrapper">

      <h1 key="h1">Playard</h1>
      <p key="content">Where You Find Sports Kakis</p>
      <div key="button" className="button-wrapper">
        <a
          href="http://preview.pro.ant.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button disabled type="primary">
            Log In
            </Button>
        </a>
        <Button disabled style={{ margin: "0 16px" }} type="primary" ghost>
          Sign Up
          </Button>
      </div>
    </div>

  );
}

export default Page2;
