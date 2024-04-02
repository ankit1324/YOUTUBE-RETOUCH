import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ButtonCard = ({ name }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (name) {
      console.log(name);
      navigate("/results?search_query=" + encodeURIComponent(name));
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        type="button"
        className={`mx-2 px-4 py-1 rounded-lg font-medium  ${
          darkTheme
            ? "bg-slate-700 hover:bg-gray-800"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        {name}
      </button>
    </>
  );
};

export default ButtonCard;
