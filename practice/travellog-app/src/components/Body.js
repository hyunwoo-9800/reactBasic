import React from "react";
import "./Body.css";
import TravelList from "./TravelList";

function Body() {

  return (
    <div className="main-content container">

      <h2>인기 여행지</h2>

      <TravelList></TravelList>

    </div>
  );
}

export default Body;
