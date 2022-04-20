import styles from "./nous.module.css";
import ReactPlayer from "react-player/youtube";

export function Nous() {
  return (
    <div className={styles.nous}>
      <div className={styles.video}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          light={true}
        />
      </div>
      <div className={styles.card}>
        <p className={styles.text}>
          On est des grands bavards, mais parfois des images valent mieux que
          1000 mots. Alors au cas où vous ne connaîtriez qu’un seul des deux
          mariés, on a décidé de se présenter au travers du regard de l’autre...
        </p>
      </div>
    </div>
  );
}
