import React from "react";
import styles from "../../styles/Boilerplate.module.css";
import { camelCase } from "../../utils";

function Boilerplate({ title }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>
        Component{" "}
        <span className={styles.componentName}>{camelCase(title)}</span> will be
        added soon{" "}
      </h3>
    </div>
  );
}

export default Boilerplate;
