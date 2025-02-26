import React from "react";
import carousel1 from "../images/carousal_1.png";
import carousel2 from "../images/carousal_2.png";
import carousel3 from "../images/carousal_3.png";
import styles from "./Carousel.module.css"; // Importing the new CSS module

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className={`${styles.carousel} carousel`} data-bs-ride="true">
      <div className={styles.carouselIndicators}>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className={`${styles.indicator} active`}
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className={styles.indicator}
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          className={styles.indicator}
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`${styles.carouselItem} carousel-item active`}>
          <img src={carousel1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className={`${styles.carouselItem} carousel-item`}>
          <img src={carousel2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className={`${styles.carouselItem} carousel-item`}>
          <img src={carousel3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button
        className={`${styles.carouselControl} carousel-control-prev`}
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`${styles.carouselControl} carousel-control-next`}
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
