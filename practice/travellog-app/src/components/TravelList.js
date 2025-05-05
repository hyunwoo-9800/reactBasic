import React, {useState} from "react";
import RatingStar from "./RatingStar";

function TravelList() {

    const [travelList, setTravelList] = useState([
      {
        id: 1,
        image: `${process.env.REACT_APP_PUBLIC_URL}/location/Jeju.svg`,
        location: "제주도",
        rating: 4,
        description:
          "아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.",
      },
      {
        id: 2,
        image: `${process.env.REACT_APP_PUBLIC_URL}/location/Hawaii.svg`,
        location: "하와이",
        rating: 5,
        description:
          "에메랄드 빛 바다와 화산지형이 어우러진 열대 천국으로, 독특한 폴리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳입니다.",
      },
      {
        id: 3,
        image: `${process.env.REACT_APP_PUBLIC_URL}/location/Barcelona.svg`,
        location: "바르셀로나",
        rating: 4,
        description:
          "가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.",
      },
    ]);

  // 여행지를 출력할 변수
  const travels = travelList.map((item) => (
    <div key={item.id} className="travel-card">
      <div className="travel-card-content">
        <img className="travel-card-image" src={item.image} alt="이미지"></img>
        <h3>{item.location}</h3>
        <span className="travel-card-rating">
          <RatingStar rating={item.rating}></RatingStar>
        </span>
        <p>{item.description}</p>
      </div>
    </div>
  ));
  return <div className="travel-grid">{travels}</div>;
}

export default TravelList;
