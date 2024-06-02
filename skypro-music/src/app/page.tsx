// import Image from "next/image";
import styles from "./page.module.css";
import Player from "@/components/Player/Player";
import Centerblock from "@/components/Centerblock/Centerblock";
import Sidebar from "@/components/Sidebar/Sidebar";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav/>
          <Centerblock />
          <Sidebar />
        </main>
        <Player />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
