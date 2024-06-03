import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          alt="логотип Skypro Music"
          className={styles.logoImage}
          width={113}
          height={17}
          src="/img/logo.png"
        />
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      <div className={styles.navMenu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Главное
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menuItem}>
            <Link href="/signin" className={styles.menuLink}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
