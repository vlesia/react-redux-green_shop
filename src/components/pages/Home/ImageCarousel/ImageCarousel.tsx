import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./ImageCarousel.module.scss";

const images = [
  { src: "img/home/1.jpg", alt: "peach tree" },
  { src: "img/home/2.jpg", alt: "grape" },
  { src: "img/home/3.jpg", alt: "strawberry" },
  { src: "img/home/4.jpg", alt: "greenhouse with plants" },
  { src: "img/home/5.jpg", alt: "tomato" },
];

export const ImageCarousel: React.FC = () => {
  return (
    <Carousel className={styles.carousel}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src={image.src}
            alt={image.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
