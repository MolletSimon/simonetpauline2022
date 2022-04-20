import styles from "./navbar.module.css";

export function Navbar({ scrollToView }) {
  return (
    <div className={`${styles.navbar} ${styles.borderXwidth}`}>
      <a onClick={() => scrollToView("nous")}>NOUS</a>
      <a onClick={() => scrollToView("mariage")}>LE MARIAGE</a>
      <a onClick={() => scrollToView("infos")}>NOUS CONTACTER</a>
    </div>
  );
}
