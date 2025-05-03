import React from "react";

function UserProfile(props) {
  return (
    // 이 컴포넌트를 받는곳에서 해당 파라미터를 주입
    <div className="user-profile">
      <h2>{props.name}</h2>
      <p>나이 : {props.age}세</p>
      <p>지역 : {props.location}</p>
      <p>취미 : {props.hobbies.join(", ")}</p>
    </div>
  );
}

export default UserProfile;
