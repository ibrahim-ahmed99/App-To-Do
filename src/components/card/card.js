import React from "react";
import styles from "../card/card.css";
import { type } from "@testing-library/user-event/dist/type";

const Card = ({ namesList , type ,deletefunc}) => {
  const Cards = namesList.map(({ name, age, address, phone }, idx) => (
    <div
      className="cardWrapper"
      key={idx}
      style={{ backgroundColor: type === "girl" ? "pink" : "blueviolet" }}
    >
      <div>Name:{name} </div>
      <div>Age:{age} </div>
      <div>Address:{address} </div>
      <div>Phone:{phone} </div>
      <div className="deleteBtn" onClick={ deletefunc? (e)=> deletefunc(e,idx):null}>x</div>
    </div>
  ));
  return <div>{Cards}</div>;
};
export default Card;
