import { TextField } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function Footer() {
  return (
    <>
      <div className="c-footer-root">
        <div className="c-footer-upPartContainer">
          <div className="c-footer-linkBlock">
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">SOLUTIONS</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Payment Fraund
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Account Takeover
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Account Sharing Prevention
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Paywall Enforcement
              </a>
            </div>
            {/*  */}
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">PLATFORM</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Pro - Visitor Identification
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                BotD - Bot Detection
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Integrations
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Security & Privacy
              </a>
            </div>
            {/*  */}
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">Developers</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Documentation
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Technical Tutorials
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Open Source vs. Pro
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                API Status
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                SDKs and Libraries
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Discord Channel
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                GitHub
              </a>
            </div>
            {/*  */}
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">RESOURCES</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Blog
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                FAQ
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Webinars
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Case Studies
              </a>
            </div>
            {/*  */}
            <div className="c-footer-linkBlockItem">
              <div className="c-footer-linkBlockItemTitle">Company</div>
              <a href="#" className="c-footer-linkBlockItemContent">
                Careers
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                System Status
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Support
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Login
              </a>
              <a href="#" className="c-footer-linkBlockItemContent">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="c-footer-subscribeContainer">
            <div>
              <div className="c-footer-subscribeTitle">
                Subscribe to our newsletter
              </div>
              <div className="c-footer-subscribeDesc">
                Get updates about company news and new features of Fingerprint
                Pro.
              </div>
              <div className="c-contactus-sendemail-container">
                <TextField
                  placeholder="Email address*"
                  className="c-contactus-input"
                />
                <CallMadeIcon className="c-footer-upArrowIcon" />
              </div>
            </div>
            <div className="c-footer-moduleContainer">
              <img
                src="/subscribeBrand1.svg"
                alt="img"
                className="c-footer-moduleBrandImg"
              />
              <img
                src="/subscribeBrand2.svg"
                alt="img"
                className="c-footer-moduleBrandImg"
              />
              <img
                src="/subscribeBrand3.svg"
                alt="img"
                className="c-footer-moduleBrandImg"
              />
            </div>
          </div>
        </div>
        <div className="c-footer-downPartContainer">
          <div className="c-footer-downPartLeft">
            <img src="/logoImg.svg" alt="img" className="c-footer-logoImg" />
            <div className="c-footer-addressContainer">
              1440 W. Taylor St #735, Chicago, IL 60607, USA
              <a href="#" className="c-footer-supportTxt">
                support@fingerprint.com
              </a>
            </div>
          </div>
          <div className="c-footer-downPartRight">
            <div className="c-footer-mainComTxt">
              © 2022 FingerprintJS, Inc{" "}
            </div>
            <div className="c-footer-socialLinkContainer">
              <img
                src="/gitHubImg.svg"
                alt="img"
                className="c-footer-socialIcon"
              />
              <img
                src="/linkedinImg.svg"
                alt="img"
                className="c-footer-socialIcon"
              />
              <img
                src="/twitteImg.svg"
                alt="img"
                className="c-footer-socialIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
