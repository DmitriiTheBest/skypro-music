import styles from "./Filters.module.css";
import classNames from "classnames";

// import Track from "../Track/Track";
// import Track from "@components/Track/Track";

export default function Filters () {
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={classNames(styles.filterButton, styles.BtnText)}>
        исполнителю
      </div>
      <div className={classNames(styles.filterButton, styles.BtnText)}>
        году выпуска
      </div>
      <div className={classNames(styles.filterButton, styles.BtnText)}>
        жанру
      </div>
    </div>
  );
}
