import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section  className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Masai School  </h3>
              <h5> Oct. 2024  to  Present </h5>
              <p>
                I have completed an intensive Frontend Development Program from Masai School, where I gained hands-on experience in React.js, JavaScript,Redux,Chakra UI HTML, CSS, Git
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Technology
              (Computer Science)</h3>
              <p>
              SR Institute of Management and
              Technology
              </p>
            </div>
          </li>
       
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};