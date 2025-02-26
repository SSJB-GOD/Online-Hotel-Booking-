import { useState } from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Our journey, vision, and mission</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Vision</h2>
        <p>
          We strive to build innovative solutions that simplify everyday life
          and make a lasting impact on the world through technology, creativity,
          and collaboration.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p>
          Our mission is to empower individuals and businesses by providing
          them with reliable, scalable, and efficient tools that help them thrive
          in an ever-evolving digital world.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <ul>
          <li>Innovation: Always pushing the boundaries of what's possible.</li>
          <li>Integrity: Doing what's right, not what's easy.</li>
          <li>Collaboration: Building lasting relationships to foster success.</li>
          <li>Excellence: Continuously improving in all that we do.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>The Future</h2>
        <p>
          Our future is about creating sustainable solutions that inspire positive
          change in the world. We believe in the power of technology to shape a
          better tomorrow.
        </p>
        <button className={styles.toggleContent} onClick={toggleContent}>
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>

      {showMore && (
        <div className={styles.expandedContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fugiat, est consequatur cumque, adipisci consectetur sint. Explicabo
            doloribus numquam saepe pariatur suscipit debitis aliquid, neque
            ratione veniam! In nisi, debitis ullam deleniti, ipsa numquam
            veritatis!
          </p>
        </div>
      )}

      <div className={styles.header}>
        <p>
          &copy; 2025, Your Company. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
