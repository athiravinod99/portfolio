//Hero section
import React, { useState, useEffect } from "react";
import about from "../../assets/hero/about.jpg";
import myImg from "../../assets/hero/myImg.png";
import styles from "./Hero.module.css";
import { Typography, Grid } from "@mui/material";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { PortfolioButton } from "../PortfolioButton/PortfolioButton";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
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

  useEffect(() => {
    startCount();
  }, []);

  // Function to increment experience count and projects completed count
  const startCount = () => {
    let experience = 0;
    let projectsCompleted = 0;
    const maxExperience = 2.6;
    const maxProjectsCompleted = 20;

    const experienceCount = document.getElementById("experienceCount");
    const projectsCount = document.getElementById("projectsCount");

    const experienceInterval = setInterval(() => {
      if (experience <= maxExperience) {
        experienceCount.textContent = experience.toFixed(1);
        experience += 0.1;
      } else {
        clearInterval(experienceInterval);
      }
    }, 100);

    const projectsInterval = setInterval(() => {
      if (projectsCompleted <= maxProjectsCompleted) {
        projectsCount.textContent = projectsCompleted;
        projectsCompleted += 1;
      } else {
        clearInterval(projectsInterval);
      }
    }, 100);
  };

  return (
    <section className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className={styles.content}>
            <Typography variant="h6" className={styles.subtitle}>
              Welcome to my world
            </Typography>
            <Typography variant="h1" className={styles.title}>
              Hi, I'm {displayText}
            </Typography>
            <p className={styles.description}>Frontend Developer</p>
            <div className={styles.contact__box}>
              <PortfolioButton buttonText="Contact Me" />
              <DownloadForOfflineRoundedIcon className={styles.icon} />
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className={styles.img__bg}>
          <img
            src={myImg}
            alt="Hero image of me"
            className={styles.hero__img}
          />
        </Grid>
        <Grid item xs={2}>
          <div className={styles.counter__container}>
            <div className={styles.counter}>
              <Typography variant="h3">
                <span id="experienceCount">0</span>
                <span>+</span>
              </Typography>
              <span className={styles.count__text}>Years of experience</span>
            </div>
            <div className={styles.counter}>
              <Typography variant="h3">
                <span id="projectsCount">0</span>
                <span>+</span>
              </Typography>
              <span className={styles.count__text}>Projects completed</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};
