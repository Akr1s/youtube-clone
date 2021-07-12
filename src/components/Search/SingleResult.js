import React from "react";
import styles from "../../styles/SingleResult.module.css";

function SingleResult({ image, name }) {
  return (
    <article className={styles.result}>
      <img src={image} alt={name} className={styles.poster} />
      <h3 className={styles.resultTitle}>{name}</h3>
    </article>
  );
}

export default SingleResult;
