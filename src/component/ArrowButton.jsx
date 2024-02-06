import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const ArrowButton = () => {
    return <>
    <ArrowBackOutlinedIcon
      color="primary"
      aria-label="뒤로가기"
      onClick={() => {
        history.back();
      }}
      style={{ marginTop: "50px", marginLeft: "40px", size: "large" }}
    ></ArrowBackOutlinedIcon>
  </>
};

export default ArrowButton;
