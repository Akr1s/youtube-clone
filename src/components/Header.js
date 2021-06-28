import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../images/logo-black.png";
import {
  AiOutlineBell,
  AiOutlineMenu,
  AiOutlineVideoCamera,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <div className={styles.hamburger}>
          <div className={styles.hamburger_item}></div>
          <div className={styles.hamburger_item}></div>
          <div className={styles.hamburger_item}></div>
        </div>
        <img src={logo} alt="Page" className={styles.logo} />
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
        <AiOutlineMenu className={styles.icon} />
        <AiOutlineBell className={styles.icon} />
        <AiOutlineUser className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;
