import React from "react";
import styles from "../styles/PageVideo.module.css";
import { Link } from "react-router-dom";

function PageVideo({ name, image, episode, id }) {
  return (
    <article className={styles.pageVideo}>
      <Link
        to={`/videoPlayer/:${id}`}
        style={{ textDecoration: "none" }}
        className={styles.pageVideoLink}
      >
        <img src={image} alt={name} className={styles.poster} />
        <div className={styles.description}>
          <h3 className={styles.videoTitle}>{name}</h3>
          <p className={styles.episode}>{episode}</p>
        </div>
      </Link>
    </article>
  );
}

export default PageVideo;
