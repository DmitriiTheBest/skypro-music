import styles from "./FilterItem.module.css";
import classNames from "classnames";

type FilterItemType = {
    title: string;
    list: string[];
};


export default function FilterItem({ title, list }: FilterItemType) {
  return (
    <>
      <div className={classNames(styles.filterButton, styles.BtnText)}>
        {title}
      </div>

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
