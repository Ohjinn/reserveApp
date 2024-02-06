import { useEffect, useState } from "react";
import ArrowButton from "../component/ArrowButton";
import RoomSelectListItem from "../component/RoomSelectListItem";

const RoomSelect = () => {
  const [isSelect, setIsSelect] = useState();
  useEffect(() => console.log(isSelect), [isSelect]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <ArrowButton />
      <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "1000",
            padding: "10px 20px",
            margin: "0",
            justifyContent: "space-between",
          }}
        >
          사용하실 휴게실 위치를 선택해주세요
        </p>
        <p
          style={{
            padding: "10px 20px",
            margin: "0",
            justifyContent: "space-between",
          }}
        >
          지역을 선택해주세요
        </p>
        {/* {api_data.map(item =>)} */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <RoomSelectListItem
            locationId="1"
            locationName="방배 3층 남자휴게실"
            isSelect={isSelect}
            setIsSelect={setIsSelect}
          />
          <RoomSelectListItem
            locationId="3"
            locationName="방배 2층 남자휴게실"
            isSelect={isSelect}
            setIsSelect={setIsSelect}
          />
        </div>
      </div>
      <button
        style={{ backgroundColor: "#000000", color: "white", margin: "10px" }}
      >
        다음
      </button>
    </div>
  );
};

export default RoomSelect;
