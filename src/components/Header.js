import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.hamburger}>
        <div className={styles.hamburger_item}></div>
        <div className={styles.hamburger_item}></div>
        <div className={styles.hamburger_item}></div>
      </div>
    </div>
  );
}

export default Header;
