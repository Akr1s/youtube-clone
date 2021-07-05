import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import pseudoTabs from "../../data/pseudoTabs";
import ShowMore from "./ShowMore";

function PseudoTabs() {
  return (
    <ul className={styles.tabs}>
      {pseudoTabs.map(({ to, exact, text, icon }) => (
        <li key={text}>
          <NavLink to={to} exact={exact} activeClassName={styles.activeLink}>
            {" "}
            {icon} {text}
          </NavLink>
        </li>
      ))}
      <ShowMore />
    </ul>
  );
}

export default PseudoTabs;
