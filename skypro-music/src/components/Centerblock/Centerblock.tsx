import classNames from "classnames";
import Track from "@components/Track/Track";
import styles from "./Centerblock.module.css";
import Filters from "../Filters/Filters";
import { getTracks } from "@/api/tracks";
import { trackType } from "@/types";

export default async function Centerblock() {
  const tracksData:trackType[] = await getTracks();
  return (
    <div className={styles.mainCenterblock}>
      <div className={styles.centerblockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters />
      <div className={styles.centerblockContent}>
        <div className={styles.contentTitle}>
          <div className={classNames(styles.playlistTitleCol, styles.col01)}>
            Трек
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col02)}>
            Исполнитель
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col03)}>
            Альбом
          </div>
          <div className={classNames(styles.playlistTitleCol, styles.col04)}>
            <svg className={styles.playlistTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className={styles.contentPlaylist}>
          {tracksData.map((trackData) => (
            <Track
              key={trackData.id}
              name={trackData.name}
              author={trackData.author}
              album={trackData.album}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// // Обратите внимание, что функция компонента также является асинхронной
// export default async function HomePage() {
//   const data = await getData();

//   return <main>/* Некий контент */</main>;
// }
