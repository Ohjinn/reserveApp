import { DUMMY_DATA } from "../util/reserve";
import ReservationListItem from "./ReservationListItem";


const ReservationList = () => {
  return (
    <>
    {DUMMY_DATA.map((item) => (
      <ReservationListItem key={item.reserveId} item={item}/>
    ))}
    </>
  );
};

export default ReservationList;