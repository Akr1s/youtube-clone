import React from "react";
import Subscription from "./Subscription";
import styles from "../../styles/Sidebar.module.css";
import subList from "../../data/subList";

function SubscriptionsList() {
  return (
    <>
      <p className={styles.subTitle}>Subscriptions</p>
      <ul className={styles.subscriptions}>
        {subList.map(({ fullName, image }, index) => (
          <li key={index}>
            <Subscription fullName={fullName} image={image} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SubscriptionsList;
