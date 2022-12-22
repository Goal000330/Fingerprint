import CallMadeIcon from "@material-ui/icons/CallMade";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const marks = [
  {
    value: 3,
    label: "20K",
  },
  {
    value: 25,
    label: "100K",
  },
  {
    value: 50,
    label: "500K",
  },
  {
    value: 75,
    label: "1M",
  },
  {
    value: 95,
    label: "1M+",
  },
];

export default function PricingBlock() {
  return (
    <>
      <div className="c-pricing-root">
        <div className="c-pricing-black"></div>
        <div className="c-pricing-mainRoot">
          <div className="c-pricing-mainContainer">
            <div className="c-pricing-mainLeftPart">
              <div className="c-pricing-tag">PRICING</div>
              <div className="c-pricing-bigTitle">
                Flexible and transparent pricing
              </div>
              <div className="c-pricing-descTxt">
                Use Fingerprint for free up to 20K identifications per month.
                Our API call-based pricing scales with you, whatever your use
                case.
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <div className="c-pricing-linkTxt">
                  Full Pricing Details case
                </div>
                <CallMadeIcon className="c-pricing-linkIcon" />
              </div>
            </div>
            <div className="c-pricing-mainRightPart">
              <div className="c-pricing-questionContainer">
                <div className="c-pricing-question">
                  How many{" "}
                  <span className="c-pricing-orangeTxt">
                    identification API calls
                  </span>{" "}
                  <br></br>
                  per month do you need?
                </div>
              </div>
              <div className="c-pricing-sliderContainer">
                <PrettoSlider
                  // valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={20}
                  marks={marks}
                />
              </div>
              <div className="c-pricing-startingContainer">
                <div className="c-pricing-question">Starting at</div>
                <div className="c-pricing-dollarTxt">
                  $200 <span className="c-pricing-permonthTxt">per month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
