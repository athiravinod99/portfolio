import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import styles from "./About.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

export const About = () => {
  const checkboxItems = [
    "User friendly design",
    "Web development",
    "Product development",
    "SEO optimisation",
  ];

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
    <section className={styles.container} id="about">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" className={styles.title}>
            About Me
          </Typography>
          <br />
          <Typography variant="h6" className={styles.paragraph}>
            I'm a frontend developer with experience in building responsive and
            optimized sites. I also have experience developing fast and
            optimized back-end systems and APIs. In addition, I have designed
            multiple landing pages and created design systems.
          </Typography>
          <Grid container spacing={3} className={styles.info}>
            <Grid item xs={6}>
              <Typography variant="h6">Name:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Athira Vinod</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Date of Birth:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>April 16, 1999</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Address:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Ernakulam, Kerala, India</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Pincode:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>683110</Typography>
            </Grid>
          </Grid>
          <Card className={styles.card}>
            <Grid container>
              <Grid item xs={6}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <MailOutlineIcon className={styles.icon} />
                  </Grid>
                  <Grid item>
                    <Typography>Email me</Typography>
                    <Typography>athiravinod.mec@gmail.com</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <CallIcon className={styles.icon} />
                  </Grid>
                  <Grid item>
                    <Typography>Make a call</Typography>
                    <Typography>9995331498</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Grid container className={styles.aboutDetails}>
            <Grid item xs={12}>
              <div className={styles.counterContainer}>
                <div className={styles.counter}>
                  <Typography variant="h4"><span id="experienceCount">0</span>
                  <span>+</span></Typography>
                  <span className={styles.countText}>years</span>
                </div>
                <div className={styles.counter}>
                  <Typography variant="h4"><span id="projectsCount">0</span>
                  <span>+</span></Typography>
                  <span className={styles.countText}>Projects Completed: </span>
                  
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={styles.checkboxGrid}>
                {checkboxItems.map((item, index) => (
                  <label key={index} className={styles.checkContainer}>
                    <input type="checkbox" checked="checked" />
                    <div className={styles.checkmark}></div>
                    {item}
                  </label>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};
