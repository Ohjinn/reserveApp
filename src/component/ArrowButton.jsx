import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const ArrowButton = () => {
    return <>
    <ArrowBackOutlinedIcon
      color="primary"
      aria-label="뒤로가기"
      onClick={() => {
        history.back();
      }}
      style={{ position: "absolute", top: "50px", left: "50px", size: "large" }}
    ></ArrowBackOutlinedIcon>
  </>
};

export default ArrowButton;
