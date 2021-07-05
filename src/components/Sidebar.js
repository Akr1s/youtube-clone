import React from "react";
import styles from "../styles/Sidebar.module.css";
import { Link, useRouteMatch } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import PseudoTabs from "./SidebarView/PseudoTabs";
import SubscriptionsList from "../components/SidebarView/SubscriptionsList";

function Sidebar() {
  const isVideoPlayer = useRouteMatch("/videoPlayer/:id");

  return (
    <div
      className={`${styles.sidebar} ${isVideoPlayer && styles.sidebarAbsolute}`}
      id="sidebar"
    >
      <nav>
        <PseudoTabs />
      </nav>
      <SubscriptionsList />
      <div className={styles.settingBtn}>
        {" "}
        <AiOutlineSetting className={styles.icon} />
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  );
}

export default Sidebar;
