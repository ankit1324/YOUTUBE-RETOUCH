import React from "react";
import ButtonCard from "./ButtonCard";

const list = [
  "All",
  "Sports",
  "Movies",
  "Live",
  "Javascript",
  "Java",
  "Gaming",
  "Music",
  "Video",
  "Cricket",
  "Football",
];

const ButtonList = () => {
  return (
    <div className="m-2 flex">
      {list.map((item) => {
        return <ButtonCard key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
