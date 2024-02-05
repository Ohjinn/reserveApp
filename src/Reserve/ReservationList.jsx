import { DUMMY_DATA } from "../util/reserve";

const ReservationList = () => {
  return (
    <>
      <Card sx={{ minWidth: 275, margin: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "right" }}>
          <Button variant="outlined" size="small">
            취소
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
