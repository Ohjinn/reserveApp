import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowButton from "./ArrowButton";
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <>
      <ArrowButton/>
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Button
            size="large"
            variant="outlined"
            href="#contained-buttons"
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
        <Link to={"/mypage"}>
          <Button
            size="large"
            variant="outlined"
            href="#contained-buttons"
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
          </Link>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};
export default Main;
