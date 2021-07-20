import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/history/historySlice";
import styles from "../../styles/History.module.css";

function History() {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(reset());
  };

  if (history.length === 0)
    return (
      <div className={styles.history}>
        <h2>There are no videos yet</h2>
      </div>
    );
  return (
    <div className={styles.history}>
      <h2>Recently opened videos</h2>
      <button onClick={handleClear} className={styles.cleatBtn}>
        Clear history
      </button>
      <div className={styles.container}>
        {history.map(({ image, name, episode, id }) => (
          <article className={styles.historyElement} key={id}>
            <img src={image} alt={name} className={styles.poster} />
            <div className={styles.description}>
              <h3 className={styles.videoTitle}>{name}</h3>
              <p className={styles.episode}>{episode}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default History;
