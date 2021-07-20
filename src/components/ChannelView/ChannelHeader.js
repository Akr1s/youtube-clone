import React from "react";
import styles from "../../styles/ChannelHeader.module.css";
import { CgBell } from "react-icons/cg";
import SubscribeBtn from "./SubscribeBtn";

function ChannelHeader({ image, name, subscribersAmount }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <img src={image} alt={`${name} logo`} />
        <div className={styles.leftContainer}>
          <h4 className={styles.channelName}>{name}</h4>
          <p className={styles.subscribers}>{subscribersAmount} subscribers</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.bellContainer}>
          <CgBell />
        </div>
        <SubscribeBtn impClass={styles.subscribeBtn} />
      </div>
    </div>
  );
}

export default ChannelHeader;
