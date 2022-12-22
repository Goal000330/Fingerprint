import OrangeBtn from "../Base/OrangeBtn/OrangeBtn";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Marquee from "react-fast-marquee";

export default function DeviceIntroBlock() {
  return (
    <>
      <div className="c-deviceIntro-root">
        <div className="c-deviceIntro-leftPart">
          <div className="c-deviceIntro-titleTxt">
            The device identity platform for high-scale applications
          </div>
          <div className="c-deviceIntro-descTxt">
            Powered by the most accurate device fingerprinting technology,
            Fingerprint enables engineers to prevent fraud, improve user
            experiences, and better understand their traffic.
          </div>
          <div className="c-deviceIntro-btnContainer">
            <OrangeBtn
              content="Create Free Account"
              className="c-deviceIntro-btn"
            />
            <OrangeBtn
              content="View Live Demo"
              bordered
              className="c-deviceIntro-btn"
            />
          </div>
          <div className="c-deviceIntro-TipsContainer">
            <div className="c-deviceIntro-Tips">
              <CheckCircleOutlineIcon className="c-deviceIntro-TipIcon" />
              <span className="c-deviceIntro-TipTxt">Free for developers</span>
            </div>
            <div className="c-deviceIntro-Tips">
              <CheckCircleOutlineIcon className="c-deviceIntro-TipIcon" />
              <span className="c-deviceIntro-TipTxt">GDPR/CCPA Compliant</span>
            </div>
            <div className="c-deviceIntro-Tips">
              <CheckCircleOutlineIcon className="c-deviceIntro-TipIcon" />
              <span className="c-deviceIntro-TipTxt">
                Get Started in 10 minutes
              </span>
            </div>
          </div>
        </div>
        <div className="c-deviceIntro-video1Container">
          <video muted playsInline autoPlay className="c-deviceIntro-video1">
            <source src="video1.mov" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="c-deviceIntro-comFlowContainer">
        <Marquee>
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-deviceIntro-comImg"
          />
        </Marquee>
      </div>
    </>
  );
}
