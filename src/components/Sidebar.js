import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { Link } from "react-router-dom";
import {
  AiOutlineUp,
  AiOutlineDown,
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
  AiOutlineMeh,
  AiOutlineSetting,
} from "react-icons/ai";
import Subscription from "./Subscription";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.png";
import user6 from "../images/user6.png";

function Sidebar() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={styles.sidebar}>
      <ul className={styles.tabs}>
        <li>
          <Link>
            {" "}
            <AiOutlineHome className={styles.icon} /> Home
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <AiOutlineFire className={styles.icon} />
            Trending
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineBook className={styles.icon} />
            Subscriptions
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineFolder className={styles.icon} />
            Library
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineHistory className={styles.icon} />
            History
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineFieldTime className={styles.icon} />
            Watch later
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineStar className={styles.icon} />
            Favorites
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineHeart className={styles.icon} />
            Liked videos
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineCustomerService className={styles.icon} />
            Music
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <AiOutlineLaptop className={styles.icon} />
            Games
          </Link>
        </li>
        {showMore && (
          <li>
            {" "}
            <AiOutlineMeh className={styles.icon} />
            Nothing more to show
          </li>
        )}
        <button
          className={styles.showMore}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? (
            <AiOutlineUp className={styles.icon} />
          ) : (
            <AiOutlineDown className={styles.icon} />
          )}{" "}
          Show {showMore ? "less" : "more"}
        </button>
      </ul>
      <p className={styles.subTitle}>Subscriptions</p>
      <ul className={styles.subscriptions}>
        <li>
          <Subscription fullName="Gussie Singleton" image={user1} />
        </li>
        <li>
          <Subscription fullName="Nora Francis" image={user2} />
        </li>
        <li>
          <Subscription fullName="Belle Briggs" image={user3} />
        </li>
        <li>
          <Subscription fullName="Eunice Cortez" image={user4} />
        </li>
        <li>
          <Subscription fullName="Emma Hanson" image={user5} />
        </li>
        <li>
          <Subscription fullName="Leah Berry" image={user6} />
        </li>
      </ul>
      <div className={styles.settingBtn}>
        {" "}
        <AiOutlineSetting className={styles.icon} />
        <Link>Setting</Link>
      </div>
    </div>
  );
}

export default Sidebar;
