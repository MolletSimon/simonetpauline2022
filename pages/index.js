import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Accueil } from "./components/home/accueil.jsx";

export default function Home() {
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

      <Accueil></Accueil>
    </div>
  );
}
