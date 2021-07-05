import {
  AiOutlineHome,
  AiOutlineFire,
  AiOutlineBook,
  AiOutlineFolder,
  AiOutlineHistory,
  AiOutlineFieldTime,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineCustomerService,
  AiOutlineLaptop,
} from "react-icons/ai";
import { icon } from "../styles/Sidebar.module.css";

const pseudoTabs = [
  {
    to: "/",
    exact: true,
    text: "Home",
    icon: <AiOutlineHome className={icon} />,
  },
  {
    to: "/trending",
    exact: false,
    text: "Trending",
    icon: <AiOutlineFire className={icon} />,
  },
  {
    to: "/subscriptions",
    exact: false,
    text: "Subscriptions",
    icon: <AiOutlineBook className={icon} />,
  },
  {
    to: "/library",
    exact: false,
    text: "Library",
    icon: <AiOutlineFolder className={icon} />,
  },
  {
    to: "/history",
    exact: false,
    text: "History",
    icon: <AiOutlineHistory className={icon} />,
  },
  {
    to: "/watchLater",
    exact: false,
    text: "Watch later",
    icon: <AiOutlineFieldTime className={icon} />,
  },
  {
    to: "/favourites",
    exact: false,
    text: "Favourites",
    icon: <AiOutlineStar className={icon} />,
  },
  {
    to: "/likedVideos",
    exact: false,
    text: "Liked videos",
    icon: <AiOutlineHeart className={icon} />,
  },
  {
    to: "/music",
    exact: false,
    text: "Music",
    icon: <AiOutlineCustomerService className={icon} />,
  },
  {
    to: "/games",
    exact: false,
    text: "Games",
    icon: <AiOutlineLaptop className={icon} />,
  },
];

export default pseudoTabs;
