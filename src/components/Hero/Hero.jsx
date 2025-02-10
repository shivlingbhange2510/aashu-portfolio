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
          I'm a full-stack web developer having hands   experience using React and
          NodeJS.
           {/* Reach out if you'd like to learn more! */}
        </p>
        <a target="_blank" href="https://drive.google.com/file/d/1_n7GBV55dPF8j4JdFiHKS9NIw3VPuE7L/view" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        src={aashu}
        style={{width:'200px', height:"200px", borderRadius:'50%'}}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
