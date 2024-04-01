import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonCard = ({ name }) => {
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
        className="mx-2 px-4 py-1 rounded-lg font-medium dark:bg-gray-100 dark:text-gray-800 hover:bg-gray-200"
      >
        {name}
      </button>
    </>
  );
};

export default ButtonCard;
