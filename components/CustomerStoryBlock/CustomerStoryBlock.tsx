export default function CustomerStoryBlock() {
  return (
    <>
      <div className="c-customerStory-root">
        <div className="c-cutomerStory-tag">CUSTOMER STORIES</div>
        <div className="c-customerStory-comCard">
          <img
            src="/checkCompany.png"
            alt="img"
            className="c-customerStoryComImg "
          />
        </div>
        <div className="c-customerStory-introTxt">
          “With Fingerprint, we're able to identify fraudulent payment attempts
          with higher accuracy. The developer experience was outstanding - we
          got all the way to production in less than a week.”
        </div>
        <div className="c-customer-middleTitle">Pierre Roudaut</div>
        <div className="c-customer-bottomTitle">
          Senior Engineering Manager - Fraud Detection
        </div>
      </div>
    </>
  );
}
