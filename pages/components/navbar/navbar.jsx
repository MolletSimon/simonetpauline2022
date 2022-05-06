import styles from "./navbar.module.css";

export default function Navbar({ scrollToView }) {
  return (
    <div
      className={`flex justify-evenly font-bold pt-8 ${styles.borderXwidth}`}
    >
      <a onClick={() => scrollToView("nous")}>NOUS</a>
      <a onClick={() => scrollToView("mariage")}>LE MARIAGE</a>
      <a onClick={() => scrollToView("infos")}>NOUS CONTACTER</a>
    </div>
  );
}
