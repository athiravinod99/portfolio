import React, { useState, useEffect } from 'react';
import about from "../../assets/hero/about.jpg"
import styles from "./Hero.module.css";
import { Typography } from '@mui/material';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const textToType = `Athira`;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setDisplayText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, [textToType]);


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Typography variant="h6" className={styles.subtitle}>Welcome to my world</Typography>
        <Typography variant="h1" className={styles.title}>Hi, I'm {displayText}</Typography>
        <p className={styles.description}>
          I'm a Frontend Developer with more than 2.5 years of experience, committed to delivering distinctive designs. 
          Reach out if you'd like to learn more!
        </p>
        <div className={styles.contactBox}>
        <a href="athiravinod.mec@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <DownloadForOfflineRoundedIcon className={styles.icon}/>
      </div></div>
      <img
        src={about}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};