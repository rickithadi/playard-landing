import React from "react";
import { Row, Col, Icon, Menu, Button, Popover } from "antd";

import { enquireScreen } from "enquire-js";

const LOGO_URL =
  "https://media-exp1.licdn.com/dms/image/C560BAQH2LlhCy8x6Mw/company-logo_200_200/0/1612234187889?e=1620259200&v=beta&t=UuQaC6TDC80sCfn0AtIwd_QF7j21jQFwl5RF1sRMB9k";

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: "horizontal",
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? "inline" : "horizontal" });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a>Home</a>
        </Menu.Item>
        <Menu.Item key="docs">
          <a>
            <span>FAQ</span>
          </a>
        </Menu.Item>
        <Menu.Item key="components">
          <a>About</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div id="header" className="header">
        <Row>
          <Col span={24}>
            <div id="logo" to="/" style={{ textAlign: "center" }}>
              <img
                src={LOGO_URL}
                alt="logo"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
