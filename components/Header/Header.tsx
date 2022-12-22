import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import OrangeBtn from "../Base/OrangeBtn/OrangeBtn";
import PlatformTab from "./PlatformTab";
import SolutionTab from "./SolutionTab";
import DeveloperTab from "./DeveloperTab";
import ResourceTab from "./ResourceTab";

export default function GeneralSaleCard() {
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "white",
          position: "fixed",
          zIndex: 20,
        }}
      >
        <div className="c-header-root">
          <div className="c-header-leftPart">
            {/* <div className="c-header-fingureLogoContainer">
              <FingerprintIcon className="c-header-fingureLogo" />
              <span className="c-header-logoTxt">Fingerprint</span>
            </div> */}
            <img
              src="/logoImg.svg"
              alt="img"
              className="c-header-fingureLogoContainer"
            />
            {/* <div className="c-header-headerTab">
              Platform
              <ExpandMoreIcon className="c-header-downIcon" />
            </div> */}
            <PlatformTab />
            <SolutionTab />
            <DeveloperTab />
            <ResourceTab />
            <div className="c-header-headerTab">Pricing</div>
            <div className="c-header-headerTab">Demo</div>
          </div>
          <div className="c-header-rightPart">
            <span className="c-header-loginTxt">Login</span>
            <OrangeBtn
              content="Contact Sales"
              bordered
              className="c-header-actionBtn"
            />
            <OrangeBtn content="Get Started" className="c-header-actionBtn" />
            <MenuIcon className="c-header-menuIcon" />
          </div>
        </div>
      </div>
    </>
  );
}
