import { Grid } from "@material-ui/core";
import BlackCard from "../Base/BlackCard/BlackCard";
import { blackCardData } from "../../config/mockupData";

export default function UsecaseBlock() {
  return (
    <>
      <div className="c-usecase-root">
        <div className="c-usecase-container">
          <div className="c-usecase-tag">USE CASES</div>
          <div className="c-usecase-bigTitleTxt">
            Solve big problems with device identity
          </div>
          <div className="c-usecase-descTxt">
            Fingerprint enables engineering, fraud, and product teams to quickly
            solve their toughest challenges within security, analytics and
            UI/UX.
          </div>
          <div className="c-usecase-blackCards">
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {blackCardData?.map((item: any, key: any) => {
                return (
                  <Grid item xs={12} sm={12} md={4} key={key}>
                    <BlackCard
                      imgSrc={item?.imgSrc}
                      content={item?.content}
                      desc={item?.desc}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
