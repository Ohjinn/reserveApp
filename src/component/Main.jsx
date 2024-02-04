import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



function Main() {
  return (
    <>
    <Box component="form" sx={{ mt: 1 }}>
      <Button size="large" variant="outlined" href="#contained-buttons">
        예약하기
      </Button>
      <Button size="large" variant="outlined" href="#contained-buttons">
        예약관리
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container style={{alignContent: "center"}}>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      </Box>
    </>
  );
}
export default Main;