import React from "react";
import styles from "../../styles/Header.module.css";
import {
  activeSidebar,
  sidebarActiveAbsolute,
} from "../../styles/Sidebar.module.css";
import logo from "../../images/logo-black.png";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineAppstore,
  AiOutlineVideoCamera,
  AiOutlineUser,
} from "react-icons/ai";
import SearchForm from "../Search/SearchForm";
import { useEffect } from "react";

function Header() {
  const isVideoPlayer = useRouteMatch("/videoPlayer/:id");

  const { pathname } = useLocation();

  const handleMenuOpen = () => {
    const element = document.getElementById("sidebar");
    if (isVideoPlayer) element.classList.toggle(sidebarActiveAbsolute);
    else element.classList.toggle(activeSidebar);
  };

  useEffect(() => {
    const element = document.getElementById("sidebar");
    if (!element.classList.contains(sidebarActiveAbsolute))
      element.classList.remove(sidebarActiveAbsolute);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.hamburger} onClick={handleMenuOpen}>
          <div className={styles.hamburger_item}></div>
          <div className={styles.hamburger_item}></div>
          <div className={styles.hamburger_item}></div>
        </div>
        <Link to="/">
          <img src={logo} alt="Page" className={styles.logo} />
        </Link>
        <SearchForm />
      </div>
      <div className={styles.header_right}>
        <AiOutlineVideoCamera className={styles.icon} />
        <AiOutlineAppstore className={styles.icon} />
        <AiOutlineBell className={styles.icon} />
        <AiOutlineUser className={styles.icon} />
      </div>
    </header>
  );
}

export default Header;
