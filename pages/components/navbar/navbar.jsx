import styles from "./navbar.module.css";

export default function Navbar({ scrollToView }) {
  return (
    <div
      className={`invisible md:visible md:flex md:justify-evenly md:font-bold pt-8 ${styles.borderXwidth}`}
    >
      <a onClick={() => scrollToView("nous")}>NOUS</a>
      <a onClick={() => scrollToView("mariage")}>LE MARIAGE</a>
      <a onClick={() => scrollToView("infos")}>NOUS CONTACTER</a>
    </div>
  );
}
