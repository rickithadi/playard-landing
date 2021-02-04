import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Playard</h2>
              <div>
                <a target="_blank " href="https://www.linkedin.com/company/playard/? ">
                  Linkedin
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="bottom-bar">
          <Col lg={18} sm={24}>
            <span style={{ marginRight: 12 }}>Copyright © Playard</span>
          </Col>
        </Row>


      </div>
    </footer>
  );
}


export default Footer;
