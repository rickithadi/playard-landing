import React from "react";
import PropTypes from "prop-types";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import Parallax from "rc-scroll-anim/lib/ScrollParallax";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";

const { TweenOneGroup } = TweenOne;

const featuresCN = [
  {
    title: "Enjoy",
    content:
      "Get matched with players through our proprietary matching algorithm to ensure you have a great time.",
    src: "https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg",
    color: "#2F54EB",
    shadowColor: "rgba(47,84,235,.12)",
  },
  {
    title: "Improve",
    content:
      "Keep track of key statistics and gather feedback to up your game.",
    src: "https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg",
    color: "#1AC44D",
    shadowColor: "rgba(26,196,77,.12)",
  },

  {
    title: "Connect",
    content: "Form lasting bonds with players on the platform.",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg",
    color: "#722ED1",
    shadowColor: "rgba(114,46,209,.12)",
  },
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
];

class Page1 extends React.PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }
  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  };
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  };
  getEnter = (e) => {
    const i = e.index;
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: "easeOutBack",
        duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1,
      },
    ];
  };
  render() {
    const { hoverNum } = this.state;
    let children = [[], [], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        "point-0 left",
        "point-0 right",
        "point-ring",
        "point-1",
        "point-2",
        "point-3",
      ].map((className) => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()}>
          <div
            className="page1-box"
            onMouseEnter={() => {
              this.onMouseOver(i);
            }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0,
                y: 30,
                opacity: 0,
                duration: 300,
                ease: "easeInBack",
              }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? "0 12px 24px" : "0 6px 12px"} ${
                  item.shadowColor
                }`,
              }}
            >
              <img
                src={item.src}
                alt="img"
                style={i === 4 ? { marginLeft: -15 } : {}}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 3)].push(child);
    });

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="home-page page1">
        <div className="home-page-wrapper" id="page1-wrapper">
          <h2 style={{ paddingBottom: "5vh" }}>
            What can <span>Playard</span> do for you{" "}
          </h2>
          {/* <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div> */}
          <OverPack>{children}</OverPack>
        </div>
      </div>
    );
  }
}

export default Page1;
