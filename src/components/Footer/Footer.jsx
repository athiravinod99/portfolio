import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerContent}>
          <h3>Contact Me</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className={styles.footerContent}>
          <h3>Follow Me</h3>
          <ul className={styles.socialLinks}>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};


