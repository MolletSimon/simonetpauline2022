import styles from "./accueil.module.css";
import { Navbar } from "../navbar/navbar.jsx";
import React from "react";
import { Nous } from "../nous/nous";

export function Accueil() {
  let nousRef = React.useRef(null);
  let mariageRef = React.useRef(null);
  let infosRef = React.useRef(null);

  const scrollToView = (page) => {
    switch (page) {
      case "nous":
        nousRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "mariage":
        mariageRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "infos":
        infosRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Navbar scrollToView={scrollToView}></Navbar>
        <h1 className={styles.title}>Pauline et Simon</h1>
      </div>
      <div ref={nousRef} className={styles.nous}>
        <Nous></Nous>
      </div>
      <div ref={mariageRef} className={styles.nous}>
        <h1>mariage</h1>
      </div>
      <div ref={infosRef} className={styles.nous}>
        <h1>infos</h1>
      </div>
    </>
  );
}
