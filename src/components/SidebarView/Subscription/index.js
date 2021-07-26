import React from "react";
import styles from "../../../styles/Subscription.module.css";

function Subscription({ fullName, image }) {
  return (
    <div className={styles.subscription}>
      <img src={image} alt={fullName} />
      <p>{fullName}</p>
    </div>
  );
}

export default Subscription;
