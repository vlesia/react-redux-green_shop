import React from "react";
import { Container } from "../../Container";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Experience FreshHarvest</h1>
      <p className={styles.description}>
        A cutting-edge web application that blends technology with creativity.
        Powered by React and Redux Toolkit, my-app delivers responsive state
        management and dynamic interfaces, enhancing user experiences.
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Technologies:</h2>
        <ul className={styles.list}>
          <li>
            <strong>React:</strong> Empowers the frontend with its declarative
            components and efficient rendering.
          </li>
          <li>
            <strong>Redux Toolkit:</strong> Streamlines state management,
            ensuring scalability and responsiveness.
          </li>
          <li>
            <strong>Bootstrap:</strong> Harnesses Bootstrap's refined components
            and utility-first approach for versatile and expressive styling.
          </li>
          <li>
            <strong>Axios:</strong> Facilitates seamless HTTP requests, making
            data fetching efficient and straightforward.
          </li>
          <li>
            <strong>TypeScript:</strong> Enhances development with strong typing
            and increased productivity across the codebase.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Development Environment:</h2>
        <ul className={styles.list}>
          <li>
            <strong>Craco:</strong> Customized configuration for Create React
            App, optimizing the development workflow.
          </li>
          <li>
            <strong>SASS Resources Loader:</strong> Simplifies CSS management by
            seamlessly sharing resources across files.
          </li>
        </ul>
      </section>
    </Container>
  );
};
