import React from "react";
import RightCardContent from "./RIghtCardContent";

const RightCard = (props) => {
  console.log(props)
  return (
    <div className=" shrink-0 h-full w-70 rounded-4xl overflow-hidden relative">
      <img
        src={props.img}
        alt=""
        className="h-full w-full object-cover"
      />
      <RightCardContent />
    </div>
  );
};

export default RightCard;
