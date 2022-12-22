export default function VidoeIntroBlock() {
  return (
    <>
      <div className="c-videoIntro-root">
        <div className="c-videoIntro-title">See how Fingerprint works</div>
        <iframe
          src="https://www.youtube.com/embed/UEYBysyPTBs"
          allow=""
          className="c-videoIntro-video"
        />
        <div className="c-videoIntro-brandContainer">
          <img
            src="/fastestBrand.svg"
            alt="img"
            className="c-videoIntro-smallBrandImg"
          />
          <img
            src="/hightBrand.svg"
            alt="img"
            className="c-videoIntro-bigBrandImg"
          />
          <img
            src="/easiestBrand.svg"
            alt="img"
            className="c-videoIntro-smallBrandImg"
          />
        </div>
      </div>
    </>
  );
}
