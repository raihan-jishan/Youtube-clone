import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/contextApi";
import SliderLists from "./SliderLists";
import { sliderInfos } from "../../utils/constants";
const Slider = () => {
  // eslint-disable-next-line no-unused-vars
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  const navigate = useNavigate();
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
    <section id="slider" className="sticky top-0 bg-black">
      <div className="overflow-auto whitespace-nowrap overflow-x-scroll bg-gray-950 mt-2 flex items-center justify-center max-lg:block">
        <div>
          {sliderInfos.map((data) => {
            return (
              <SliderLists
                data={data}
                key={data.id}
                action={() => {
                  clickHandler(data.name, data.type);
                  navigate("/");
                }}
                bg={
                  selectedCategory === data.name
                    ? "bg-red-300 text-black    text-xl "
                    : "bg-gray-800 text-gray-200"
                }
              />
            );
          })}{" "}
        </div>
      </div>
    </section>
  );
};

export default Slider;
