import FilterItem from "./FilterItem/Filteritem";
import styles from "./Filters.module.css";
import classNames from "classnames";

// import Track from "../Track/Track";
// import Track from "@components/Track/Track";

export default function Filters() {
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem
        title={"Исполнитель"}
        list={["Dmitrii", "Nasty", "Pollie", "Ksena"]}
      />
      <FilterItem
        title={"Году выпуска"}
        list={["2020", "2021", "2022", "2023"]}
      />
      <FilterItem
        title={"Жанру"}
        list={["Rock", "Pop", "Rap", "Jazz"]}
      />
    </div>
  );
}
