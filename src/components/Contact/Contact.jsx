import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:myemail@email.com">     
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
         vandana12345@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a className="text" href="http://linkedin.com/in/vandanaanand1">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
         http://linkedin.com/in/vandanaanand1</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Vandana-Jain-123">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
         https://github.com/Vandana-Jain-123</a>
        </li>
      </ul>
    </footer>
  );
};
