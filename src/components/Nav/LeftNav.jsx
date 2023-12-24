import React, { useContext, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { categories } from "../../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const [width, setWidth] = useState(false);
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  const navigate = useNavigate();
  const setWidthWidgets = () => {
    setWidth(!width);
  };
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={
        width
          ? `hidden md:block w-[90px]
          overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 md:translate-x-0 transition-all `
          : `hidden md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all`
      }
    >
      <HiBars3BottomRight
        size="40"
        className="text-gray-400  hover:bg-gray-700 transition-all rounded-full cursor-pointer sticky top-0 "
        onClick={setWidthWidgets}
      />
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
                width={width}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">vMedia</div>
      </div>
    </div>
  );
};

export default LeftNav;
