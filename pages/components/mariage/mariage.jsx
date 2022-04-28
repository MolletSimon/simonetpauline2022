import styles from "./mariage.module.css";

export default function Mariage() {
  return (
    <div className={styles.mariage}>
      <div className={styles.left}>
        <h3 className={styles.hour15}>15h</h3>
        <img src="/images/church.png" alt="église" width="150"></img>
        <span>Église Ciel Ouvert</span>
        <span>175 Rue du Pré de la Roquette</span>
        <span>76800 Saint-Étienne-Du-Rouvray</span>
      </div>
      <div className={styles.arrow}>
        <img src="/images/arrow.png" alt="Flèche" width="500" height="200" />
      </div>
      <div className={styles.right}>
        <h3 className={styles.hour17}>17h</h3>
        <img src="/images/wine.png" alt="vin d'honneur" width="150"></img>
        <span className={styles.grange}>La grange du Mesnil Varin</span>
        <span>204 Le Mesnil Varin</span>
        <span>76480 Saint-Paër</span>
      </div>
    </div>
  );
}
