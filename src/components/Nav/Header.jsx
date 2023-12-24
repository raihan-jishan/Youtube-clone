import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import Slider from "../Slider/Slider.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import { FaGooglePlay } from "react-icons/fa6";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  return (
    <div className="dark:bg-black">
      <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black p-2">
        <div className="flex h-5 items-center">
          <Link to="/" className="flex h-5 items-center ">
            <span className="text-gray-300  text-xl flex">
            <FaGooglePlay 
              size={30}
              className="text-red-300"
              />  vMedia 
            </span>
          </Link>
        </div>
        <Searchbar
          setSearchQuery={setSearchQuery}
          searchQueryHandler={searchQueryHandler}
          searchQuery={searchQuery}
        />
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" />
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Header;
