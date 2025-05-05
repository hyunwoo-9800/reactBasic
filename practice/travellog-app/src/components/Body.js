import React from "react";
import "./Body.css";
import TravelList from "./TravelList";
import AddTravel from "./AddTravel";

function Body() {

  return (
    <div className="main-content container">

      <AddTravel></AddTravel>

      <h2>인기 여행지</h2>

      <TravelList></TravelList>

    </div>
  );
}

export default Body;
