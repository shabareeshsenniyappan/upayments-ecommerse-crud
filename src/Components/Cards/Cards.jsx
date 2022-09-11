import React from "react";
import Picture from "../Picture/Picture";
import "./cards.css";
import { useNavigate } from "react-router-dom";

function Cards({ avatar, title, price, id }) {
  let navigate = useNavigate();

  const routeChange = (e) => {
    let path = `/detail/${e}`;
    navigate(path);
  };
  return (
    <div
      className={"card-container"}
      onClick={() => {
        routeChange(id);
      }}
    >
      <Picture avatar={avatar} />
      <div className={"card-title"}>{title}</div>
      <div className={"card-price"}>{"$ " + price}</div>
    </div>
  );
}

export default Cards;
