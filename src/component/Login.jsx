import Grid from "@mui/material/Grid";
const Login = () => {
  return (
    <div>
      <div style={{backgroundColor: "#f5f5dc"}}>
        <Grid container style={{padding: "50% 0%"}}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <img
              alt="logo"
              src="logo.png"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <p style={{textAlign:"center"}}>kt ds 안마의자 예약 시스템</p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <img
              alt="kakaologin"
              src="kakaoLogin.png"
              style={{ maxWidth: "100%"}}
            />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
