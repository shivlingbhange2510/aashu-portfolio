import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import aashu from './aashu.jpeg'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vandana</h1>
        <p className={styles.description}>
          I am a Frontend Developer with hands-on experience in JavaScript and React.

          {/* Reach out if you'd like to learn more! */}
        </p>
        <a target="_blank" href="https://drive.google.com/drive/folders/1YfAD1JYPuI1CG1DkmOspRPE64HtAlae2?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        src={aashu}
        style={{ width: '230px', height: "280px", borderRadius: '5%' }}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
