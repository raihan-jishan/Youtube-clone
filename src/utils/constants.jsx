import { MdOutlineLiveTv } from "react-icons/md";
import { CiFlag1, CiMusicNote1 } from "react-icons/ci";
import { FaOpencart, FaPhotoFilm, FaRegLightbulb } from "react-icons/fa6";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { CiPassport1 } from "react-icons/ci";
import { RiFeedbackLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";

export const categories = [
  { name: "New", icon: <IoHomeOutline size={25} />, type: "home" },
  {
    name: "Trending",
    icon: <FaFireAlt size={25} />,
    type: "category",
  },
  { name: "Music", icon: <CiMusicNote1 size={25} />, type: "category" },
  { name: "Films", icon: <FaPhotoFilm size={25} />, type: "category" },
  { name: "Live", icon: <MdOutlineLiveTv size={25} />, type: "category" },
  {
    name: "Gaming",
    icon: <IoGameControllerOutline size={25} />,
    type: "category",
  },
  { name: "News", icon: <FaRegNewspaper size={25} />, type: "category" },
  { name: "Sports", icon: <CiPassport1 size={25} />, type: "category" },
  { name: "Learning", icon: <FaRegLightbulb size={25} />, type: "category" },
  {
    name: "Fashion & beauty",
    icon: <FaOpencart size={25} />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <IoSettingsOutline size={25} />, type: "menu" },
  { name: "Report History", icon: <CiFlag1 size={25} />, type: "menu" },
  { name: "Help", icon: <IoIosHelpCircleOutline size={25} />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine size={25} />, type: "menu" },
];
export const sliderInfos = [
  { name: "All", type: "category" },
  { name: "News", type: "category" },
  { name: "Music", type: "category" },
  { name: "Drama", type: "category" },
  { name: "Movie", type: "category" },
  { name: "Gaming", type: "category" },
  { name: "USA", type: "category" },
  { name: "category", type: "category" },
  { name: "Sports", type: "category" },
  { name: "Iphone", type: "category" },
  { name: "Wheather", type: "category" },
  { name: "Cars", type: "category" },
  { name: "DIY", type: "category" },
  { name: "Technologies", type: "category" },
];
