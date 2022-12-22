export default function SecurityPrivacyBlock() {
  return (
    <>
      <div className="c-security-root">
        <div className="c-security-container">
          <div className="c-security-upPart">
            <div className="c-security-tag">Security and privacy</div>
            <div className="c-security-bigTitleTxt">
              Your compliance officer will love us, too
            </div>
            <div className="c-security-descTxt">
              We maintain the highest standards in privacy, security and
              performance.
            </div>
          </div>
          <div className="c-security-downPart">
            <div className="c-security-downPartItem">
              <img src="/star.png" alt="img" className="c-security-startImg" />
              <div className="c-security-starDesc">GDPR and CCPA Compliant</div>
            </div>
            <div className="c-security-downPartItem">
              <img src="/star.png" alt="img" className="c-security-startImg" />
              <div className="c-security-starDesc">99.9% Uptime SLA</div>
            </div>
            <div className="c-security-downPartItem">
              <img src="/star.png" alt="img" className="c-security-startImg" />
              <div className="c-security-starDesc">SOC 2 Type II Certified</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
