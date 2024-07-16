import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div  className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
