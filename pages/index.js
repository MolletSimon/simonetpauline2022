import Head from "next/head";
import styles from "../styles/Home.module.css";
import Accueil from "./components/home/accueil.jsx";
import react from "react";

export default function Home() {
  let [isAuth, setIsAuth] = react.useState(false);
  let [inputValue, setInputValue] = react.useState("");

  let checkCode = () => {
    if (inputValue == "titibg76") {
      setIsAuth(true);
    }
  };

  let handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Head>
        <title>Simon et Pauline 2022</title>
        <meta
          name="description"
          content="Site de mariage de Simsim et Pauline"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuth ? (
        <Accueil></Accueil>
      ) : (
        <div className={styles.code}>
          <div className={styles.modal}>
            <h1>Hello !</h1>
            <span>
              Ce site est protégé par un mot de passe ! Vous le trouverez sur
              votre faire part 😉
            </span>
            <div className={styles.form}>
              <input value={inputValue} onChange={handleChange}></input>
              <button onClick={checkCode}>GO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
