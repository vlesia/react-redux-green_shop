import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../Container";
import styles from "./ErrorPage.module.scss";

export const ErrorPage: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.errorWrapper}>
          <h1>404</h1>
          <h2 className={styles.errorName}>Page Not Found</h2>
          <p className={styles.text}>
            Sorry, the page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <div className={styles.button}>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
