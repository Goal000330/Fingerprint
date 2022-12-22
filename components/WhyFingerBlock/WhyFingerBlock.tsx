export default function GeneralSaleCard() {
  return (
    <>
      <div className="c-whyFinger-root">
        <div className="c-whyFinger-mainContqainer">
          <img src="/chart.png" alt="img" className="c-whyFinger-chartImg" />
          <div className="c-whyFinger-upPart">
            <div className="c-whyFinger-tag">WHY FINGERPRINT</div>
            <div className="c-whyFinger-bigTitle">
              The world’s most accurate visitor identifier
            </div>
            <div className="c-whyFinger-bigDesc">
              As third-party cookies are deprecated and changes to browsers and
              operating systems make identity more challenging, we are focused
              on ensuring our accuracy is the highest on the market.
            </div>
          </div>
          {/*  */}
          <div className="c-whyFinger-downPart">
            <div className="c-whyFinger-downPartItem">
              <div className="c-whyFinger-downPartItemTitle">
                99.5% Accuracy
              </div>
              <div className="c-whyFinger-downPartItemDesc">
                Highest identification accuracy using fingerprinting, fuzzy
                matching and server-side techniques.
              </div>
            </div>
            <div className="c-whyFinger-divide" />
            {/*  */}
            <div className="c-whyFinger-downPartItem">
              <div className="c-whyFinger-downPartItemTitle">
                Permanent Identifier
              </div>
              <div className="c-whyFinger-downPartItemDesc">
                Pro's VisitorID will remain the same for years, even as browsers
                are upgraded.
              </div>
            </div>
            <div className="c-whyFinger-divide" />
            <div className="c-whyFinger-downPartItem">
              <div className="c-whyFinger-downPartItemTitle">
                Identify Bots and Humans
              </div>
              <div className="c-whyFinger-downPartItemDesc">
                Distinguish bots and humans in the platform in order to build
                more intelligent workflows.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
