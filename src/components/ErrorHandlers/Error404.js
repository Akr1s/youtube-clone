import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Error404.module.css";

function Error404() {
  return (
    <div className={styles.error_container}>
      <h1>404</h1>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Error404;
