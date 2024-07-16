import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a href="https://github.com/vlesia">GitHub</a>
        </li>
        <li>
          <a
            href="mailto:lesia.hlukhaniuk.dev@gmail.com"
            className={styles.icon}
          >
            📧 lesia.hlukhaniuk.dev@gmail.com
          </a>
        </li>
      </ul>
      <div className={styles.bottom}>
        <p>© 2024 Copyright: Olesia Hlukhaniuk</p>
      </div>
    </footer>
  );
};
