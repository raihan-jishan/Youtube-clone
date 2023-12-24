import { NavLink } from "react-router-dom";

const SliderLists = ({ data, action , bg}) => {
  return (
    <NavLink
      to={"/"}
      className={
        `inline-block p-2 ${bg} rounded-full  ${bg} px-4 hover:scale-95 transition-all ml-2`
      }
      onClick={action}
    >
      {data.name}
    </NavLink>
  );
};

export default SliderLists;
