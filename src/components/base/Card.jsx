import React from "react";

const Card = ({ title, desc, cardImage, bgColor }) => {
  return (
    <div className={`h-[656] w-[560] rounded-xl bg-[${bgColor}]`}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div>{cardImage}</div>
    </div>
  );
};

export default Card;
