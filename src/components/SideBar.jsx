import {
  faFile,
  faFileVideo,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCameraRetro,
  faChartSimple,
  faChevronDown,
  faClockRotateLeft,
  faDumpsterFire,
  faGears,
  faHouse,
  faHouseChimney,
  faToolbox,
  faUserTie,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //!early Return
  if (!isMenuOpen) return null;

  return (
    <div className="sm:w-56 mt-20 ">
      <aside className="w-full p-6 sm:w-56 max-h-screen fixed hover:overflow-y-scroll overflow-hidden overscroll-contain border-r-2 border-grey-400">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest p-1 pl-2 uppercase dark:text-black hover:bg-gray-200 hover:rounded-2xl">
              <Link to="/">
                <FontAwesomeIcon icon={faHouseChimney} /> Home
              </Link>
            </h2>
            <h2 className="text-sm font-semibold tracking-widest p-1 pl-2 uppercase dark:text-black hover:bg-gray-200 hover:rounded-2xl">
              <FontAwesomeIcon icon={faCameraRetro} /> Shorts
            </h2>
            <h2 className="text-sm font-semibold tracking-widest p-1 pl-2 uppercase dark:text-black hover:bg-gray-200 hover:rounded-2xl">
              <FontAwesomeIcon icon={faDumpsterFire} /> Subscription
            </h2>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-widest p-1 pl-2 uppercase dark:text-black hover:bg-gray-200 hover:rounded-2xl">
              <FontAwesomeIcon icon={faUser} /> You{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </h2>
            <div className="flex flex-col space-y-1 p-1 pl-2 ">
              <a
                rel="noopener "
                href="#"
                className="p-1 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faChartSimple} /> Your Channel
              </a>
              <a
                rel="noopener "
                href="#"
                className="p-1 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faClockRotateLeft} /> History
              </a>
              <a
                rel="noopener "
                href="#"
                className="p-1 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faVideo} /> Your Video
              </a>
              <a
                rel="noopener "
                href="#"
                className="p-1 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faFileVideo} /> Watch later
              </a>
              <a
                rel="noopener "
                href="#"
                className="p-1 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faChevronDown} /> Show more
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-widest p-1 pl-2  uppercase dark:text-black hover:bg-gray-200 hover:rounded-2xl">
              <FontAwesomeIcon icon={faFile} /> Pages{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </h2>
            <div className="flex flex-col p-1 pl-2  space-y-1">
              <a
                href="#"
                className="p-1 pl-2 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faHouse} /> Homepage
              </a>
              <a
                href="#"
                className="p-1 pl-2 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faUserTie} /> Users
              </a>
              <a
                href="#"
                className="p-1 pl-2 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faToolbox} /> Tools
              </a>
              <a
                href="#"
                className="p-1 pl-2 hover:bg-gray-200 hover:rounded-2xl"
              >
                <FontAwesomeIcon icon={faGears} /> Settings
              </a>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
