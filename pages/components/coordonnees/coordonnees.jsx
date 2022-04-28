import styles from "./coordonnees.module.css";
import react from "react";
import AOS from "aos";

export default function Coordonnees() {
  react.useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);
  return (
    <>
      <h1 className={styles.title}>Nos coordonnées</h1>
      <div className={styles.white}>
        <div className={styles.address} data-aos="fade-in">
          <span className={styles.li}>168 Avenue</span>
          <span className={styles.li}>du Mont Riboudet</span>
          <div data-aos="fade-in">
            <span className={styles.li}>76 000</span>
            <span className={styles.medium}> Rouen</span>
          </div>
        </div>

        <div className={styles.num} data-aos="fade-in">
          <div className={styles.pauline}>
            <span className={styles.mi}>Pauline</span>
            <span className={styles.light}>06.89.41.17.67</span>
          </div>
          <div className={styles.pauline}>
            <span className={styles.mi}>Simon</span>
            <span className={styles.light}>06.70.05.93.27</span>
          </div>
        </div>
      </div>
    </>
  );
}
