import Head from "next/head";
import styles from "../styles/Home.module.css";
import Accueil from "./components/home/accueil.jsx";
import react from "react";
import { ToastContainer } from "react-toastr";

export default function Home() {
  let [isAuth, setIsAuth] = react.useState(false);
  let [inputValue, setInputValue] = react.useState("");
  let container;

  let checkCode = () => {
    if (inputValue == "mariage2022") {
      setIsAuth(true);
    } else {
      alert(
        "Aïe ! Mauvais mot de passe, veuillez vérifier le code présent sur votre faire-part"
      );
    }
  };

  let handleChange = (event) => {
    setInputValue(event.target.value);
  };

  let enterPressed = (key) => {
    if (key.keyCode === 13) {
      checkCode();
    }
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
      <ToastContainer
        ref={(ref) => (container = ref)}
        className="toast-top-right"
      />
      {isAuth ? (
        <Accueil></Accueil>
      ) : (
        <div className={styles.code}>
          <div className={`${styles.modal} m-0`}>
            <h1>Hello !</h1>
            <span>
              Ce site est protégé par un mot de passe ! Vous le trouverez sur
              votre faire part 😉
            </span>
            <div className={styles.form}>
              <input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={(key) => enterPressed(key)}
              ></input>
              <button onClick={checkCode}>GO</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
