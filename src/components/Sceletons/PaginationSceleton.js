import React from "react";
import styles from "../../styles/PaginationSceleton.module.css";

function PaginationSceleton() {
  return (
    <div className={styles.skeletonItem}>
      <div className={styles.skeletonPages}></div>
    </div>
  );
}

export default PaginationSceleton;
