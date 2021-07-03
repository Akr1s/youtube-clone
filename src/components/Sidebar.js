import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { NavLink, Link } from "react-router-dom";
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
    <div className={styles.sidebar} id="sidebar">
      <nav>
        <ul className={styles.tabs}>
          <li>
            <NavLink to="/" exact activeClassName={styles.activeLink}>
              {" "}
              <AiOutlineHome className={styles.icon} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/trending" activeClassName={styles.activeLink}>
              {" "}
              <AiOutlineFire className={styles.icon} />
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink to="/subscriptions" activeClassName={styles.activeLink}>
              <AiOutlineBook className={styles.icon} />
              Subscriptions
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" activeClassName={styles.activeLink}>
              <AiOutlineFolder className={styles.icon} />
              Library
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" activeClassName={styles.activeLink}>
              <AiOutlineHistory className={styles.icon} />
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchLater" activeClassName={styles.activeLink}>
              <AiOutlineFieldTime className={styles.icon} />
              Watch later
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={styles.activeLink}>
              <AiOutlineStar className={styles.icon} />
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/likedVideos" activeClassName={styles.activeLink}>
              <AiOutlineHeart className={styles.icon} />
              Liked videos
            </NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={styles.activeLink}>
              <AiOutlineCustomerService className={styles.icon} />
              Music
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" activeClassName={styles.activeLink}>
              {" "}
              <AiOutlineLaptop className={styles.icon} />
              Games
            </NavLink>
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
      </nav>
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
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  );
}

export default Sidebar;
