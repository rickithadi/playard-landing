import React from "react";
import soccer from "./component/soccer.json";
import LottieAnimation from "./component/LottieAnimation";
import PropTypes from "prop-types";
import GitHubButton from "react-github-button";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button } from "antd";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        //<TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
        <div className="home-banner-image" style={{paddingTop:'20vh'}}>
          <LottieAnimation lotti={soccer} />
        </div>
        //</TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? "bottom" : "right"}
      >
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
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <LottieAnimation lotti={soccer} height={600} width={500} />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
