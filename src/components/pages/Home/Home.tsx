import React from "react";
import { Container } from "../../Container";
import { ImageCarousel } from "./ImageCarousel";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <Container>
      <div className={styles.container}>
        <section className={styles.intro}>
          <h2>Welcome to FreshHarvest Organic Market!</h2>
          <p>
            Discover the finest selection of organic fruits and vegetables,
            handpicked for their exceptional quality and flavor. At
            FreshHarvest, we believe in the power of nature to nourish and heal,
            which is why all our products are grown without synthetic
            pesticides, fertilizers, or GMOs.
          </p>
        </section>
      </div>
      <ImageCarousel />
    </Container>
  );
};
