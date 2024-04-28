import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerContent}>
          <h3>Quick Links</h3>
          <p>About</p>
          <p>Projects</p>
          <p>Resume</p>
        </div>
        <div className={styles.footerContent}>
          <h3>Follow Me</h3>
          <ul className={styles.socialLinks}>
            <li><a href="#"><InstagramIcon /></a></li>
            <li><a href="#"><LinkedInIcon /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright @ 2024, Athira Vinod all rights reserved</p>
      </div>
    </footer>
  );
};


