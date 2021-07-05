import React from "react";
import styles from "../styles/Header.module.css";
import {
  activeSidebar,
  sidebarActiveAbsolute,
} from "../styles/Sidebar.module.css";
import logo from "../images/logo-black.png";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineAppstore,
  AiOutlineVideoCamera,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

function Header() {
  const { pathname } = useLocation();
  const isVideoPlayer = pathname.includes("videoPlayer");

  const handleMenuOpen = () => {
    const element = document.getElementById("sidebar");
    if (isVideoPlayer) element.classList.toggle(sidebarActiveAbsolute);
    else element.classList.toggle(activeSidebar);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.hamburger} onClick={handleMenuOpen}>
          <div className={styles.hamburger_item}></div>
          <div className={styles.hamburger_item}></div>
          <div className={styles.hamburger_item}></div>
        </div>
        <Link to="/">
          <img src={logo} alt="Page" className={styles.logo} />
        </Link>
        <form className={styles.search_form}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Search..."
          />
          <AiOutlineSearch className={styles.seach_icon} />
        </form>
      </div>
      <div className={styles.header_right}>
        <AiOutlineVideoCamera className={styles.icon} />
        <AiOutlineAppstore className={styles.icon} />
        <AiOutlineBell className={styles.icon} />
        <AiOutlineUser className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;
