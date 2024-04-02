import {
  faCircleHalfStroke,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { toggleTheme } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const darkTheme = useSelector((store) => store.app.darkTheme);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const proxy = "https://proxy.cors.sh/";
    const data = await fetch(proxy + YOUTUBE_SEARCH_API + searchQuery, {
      headers: {
        "x-cors-api-key": "temp_0365482cc458af27387c46739f0bc494",
      },
    });
    const json = await data.json();
    // console.log(json?.[1]);
    setSuggestions(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestions = (event) => {
    setSearchQuery(event.target.innerText);
    setShowSuggestions(false);
    navigate("/results?search_query=" + encodeURI(event.target.innerText));
  };

  const handleSearchButton = () => {
    navigate("/results?search_query=" + searchQuery);
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={`Header grid grid-flow-col border-b-2  fixed top-0 left-0 right-0 z-10 ${
        darkTheme ? "bg-slate-400 border-gray-800" : "bg-white border-slate-300"
      } `}
    >
      <div className="LogoSection col-span-2 flex">
        <img
          onClick={toggleMenuHandler}
          className="w-10 h-10 mt-[20px] m-4 cursor-pointer "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Hamburger Icon"
        />
        <a href="/">
          <img
            className={
              "w-36 " + (darkTheme ? "rounded-full" : "rounded-medium")
            }
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpybK96bTpZq_ipwlHzzeRa8pZv32Ivyg1orqSTJ3rWQ&s"
            alt="youtube-Logo"
          />
        </a>
      </div>
      <div className="Search col-span-9 mt-[20px] ml-24">
        <div>
          <input
            className={`border border-gray-400 w-3/4 pl-3 py-2 rounded-l-full ${
              darkTheme
                ? "bg-slate-600 border-slate-900 text-slate-50"
                : "bg-slate-200 "
            }`}
            type="text"
            placeholder=" Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button
            onClick={handleSearchButton}
            className={`border border-l-0 px-6 py-2 rounded-r-full ${
              darkTheme
                ? "bg-slate-700 border-gray-900 text-white"
                : "bg-slate-200 border-gray-400"
            }`}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute hover:bg-red-500 hover:text-white hover:rounded-full w-9 h-9 right-[21rem] top-[25px]"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {showSuggestions && (
            <div className="absolute font-mono bg-white py-2 px-5 w-[32rem] shadow-xl rounded-xl border border-gray-100">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    onMouseDown={(e) => handleSuggestions(e)}
                    className="p-1 shadow-sm hover:bg-gray-200 rounded-md"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} /> {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={handleTheme}
            className={`m-2 px-2 py-1 rounded-full   ${
              darkTheme
                ? "active:bg-white bg-white"
                : "active:bg-slate-800 bg-gray-600 text-white"
            }`}
          >
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          </button>
        </div>
      </div>
      <div className="User flex col-span-1 mt-[20px]">
        <img
          className={`w-10 h-10 mr-2 ${darkTheme ? "rounded-full" : ""}`}
          src="https://t4.ftcdn.net/jpg/01/98/33/63/360_F_198336329_D3JsfuSGm5UBTXR9fwcr2WhKNebr7SiB.jpg"
          alt=""
        />
        <img
          className={`w-10 h-10 mr-2 ${darkTheme ? "rounded-full" : ""}`}
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
