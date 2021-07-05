import React from "react";
import styles from "../../styles/Episode.module.css";

function Episode({ name, image, episode }) {
  return (
    <div className={styles.pageVideo}>
      <img src={image} alt={name} className={styles.poster} />
      <div className={styles.description}>
        <h3 className={styles.videoTitle}>{name}</h3>
        <p className={styles.episode}>{episode}</p>
      </div>
    </div>
  );
}

export default Episode;
