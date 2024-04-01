import React from "react";
import ButtonList from "../components/ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log(isMenuOpen);

  return (
    <div className={`mt-20 ${isMenuOpen ? "ml-52" : "ml-1"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
