import ReservationList from '../component/ReservationList';
import ArrowButton from '../component/ArrowButton';

export default function MyPage() {
  return (
    <div style={{height: "100vh", margin: "2px"}}>
      <ArrowButton/>
      <ReservationList/>
    </div>
  );
}
