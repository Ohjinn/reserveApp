import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowButton from "../component/ArrowButton";


const Main = () => {
  return (
    <>
      <ArrowButton/>
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Button
            href="/roomselect"
            size="large"
            variant="outlined"
            style={{
              width: "100%",
              m: 1,
              color: "black",
              borderColor: "gray",
              ":hover": { borderColor: "black" }
            }}
          >
            예약하기
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Button
            href="/mypage"
            size="large"
            variant="outlined"
            style={{
              width: "100%",
              m: 1,
              color: "black",
              borderColor: "gray",
              ":hover": { borderColor: "black" }
            }}
          >
            예약관리
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};
export default Main;
