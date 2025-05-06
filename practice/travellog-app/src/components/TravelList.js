import React, { useState, useEffect, useRef } from "react";
import RatingStar from "./RatingStar";
import AddTravel from "./AddTravel";

function TravelList() {
  // 여행지 목록
  const [travelList, setTravelList] = useState([
    {
      id: 1,
      image: `${process.env.REACT_APP_PUBLIC_URL}/location/Jeju.svg`,
      location: "제주도",
      rating: 4,
      description:
        "아름다운 자연 경관과 독특한 문화를 가진 한국의 대표적인 휴양지입니다.",
      visitCount: 0,
    },
    {
      id: 2,
      image: `${process.env.REACT_APP_PUBLIC_URL}/location/Hawaii.svg`,
      location: "하와이",
      rating: 5,
      description:
        "에메랄드 빛 바다와 화산지형이 어우러진 열대 천국으로, 독특한 폴리네시안 문화와 여유로운 알로하 정신을 느낄 수 있는 곳입니다.",
      visitCount: 0,
    },
    {
      id: 3,
      image: `${process.env.REACT_APP_PUBLIC_URL}/location/Barcelona.svg`,
      location: "바르셀로나",
      rating: 4,
      description:
        "가우디의 건축물과 지중해의 해변을 모두 즐길 수 있는 매력적인 도시입니다.",
      visitCount: 0,
    },
  ]);

  // 새 여행지 추가 함수
  const addTravel = (form) => {
    const newTravel = {
      id: Date.now(),
      image: form.image,
      location: form.location,
      rating: form.rating,
      description: form.description,
      visitCount: form.visitCount,
    };

    setTravelList([...travelList, newTravel]);
  };

  // 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [visitCount, setVisitCount] = useState(0); // 방문 횟수 상태 추가

  const modalRef = useRef(null);

  // 모달 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  const modal = (item) => {
    setSelectedItem(item); // 선택된 아이템을 저장
    setIsModalOpen(true); // 모달 열기

    // 방문 횟수 증가
    setTravelList((prevList) =>
      prevList.map((t) =>
        t.id === item.id ? { ...t, visitCount: t.visitCount + 1 } : t
      )
    );
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  // 정렬용
  const [sortOption, setSortOption] = useState("location"); // 정렬 옵션 상태

  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortOption(selected);
    handleSort(selected);
  };

  const handleSort = (option) => {
    const sorted = [...travelList];

    if (option === "location") {
      sorted.sort((a, b) => a.location.localeCompare(b.location));
    } else if (option === "visitCount") {
      sorted.sort((a, b) => b.visitCount - a.visitCount);
    } else if (option === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setTravelList(sorted);
  };

  // 여행지를 출력할 변수
  const travels = travelList.map((item) => (
    <div key={item.id} className="travel-card">
      <div className="travel-card-content">
        <img className="travel-card-image" src={item.image} alt=""></img>

        <h3>{item.location}</h3>
        <span className="travel-card-rating">
          <RatingStar rating={item.rating}></RatingStar>
        </span>
        <p>{item.description}</p>
        <button className="view-details-btn" onClick={() => modal(item)}>
          상세보기
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <AddTravel onAdd={addTravel}></AddTravel>
      <div className="sort-control">
        <label>정렬</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="location">이름순</option>
          <option value="visitCount">조회순</option>
          <option value="rating">평점순</option>
        </select>
      </div>
      <div className="travel-grid">{travels}</div>

      {/* 모달 */}
      {isModalOpen && selectedItem && (
        <div className="detail-view">
          <div className="detail-content" ref={modalRef}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedItem.location}</h2>
            <img
              className="detail-image"
              src={selectedItem.image}
              alt={selectedItem.location}
            />
            <p className="description">{selectedItem.description}</p>
            <RatingStar rating={selectedItem.rating}></RatingStar>
            <p className="visit-count">
              이 페이지 방문 횟수 : {selectedItem.visitCount}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TravelList;
