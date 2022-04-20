import styles from "./nous.module.css";

export function Nous() {
  return (
    <div className={styles.nous}>
      <div className={styles.video}>
        <h1>Vidéo</h1>
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
