// About section
import React, { useEffect } from "react";
import {
  Card,
  Grid,
  Typography,
} from "@mui/material";
import styles from "./About.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { Title } from "../Title/Title";
import { PortfolioPair } from "../PortfolioPair/PortfolioPair";

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
          <Title title="About Me" subtitle="Bringing Ideas to Life with Code" />
          <br />
          <Typography variant="h6" className={styles.paragraph}>
            I'm a frontend developer with experience in building responsive and
            optimized sites. I also have experience developing fast and
            optimized back-end systems and APIs. In addition, I have designed
            multiple landing pages and created design systems.
          </Typography>
          <Grid container spacing={3} className={styles.info}>
            <PortfolioPair title="Name" value="Athira Vinod" />
            <PortfolioPair title="Date of Birth" value="April 16, 1999" />
            <PortfolioPair title="Address" value="Ernakulam, Kerala, India" />
            <PortfolioPair title="Pincode" value="683110" />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container className={styles.about__details}>
          <Card className={styles.card}>
            <Grid container>
              <Grid item xs={6}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs={2} className={styles.box__items}>
                    <MailOutlineIcon className={styles.icon} />
                  </Grid>
                  <Grid item xs={10} >
                    <Typography variant="body1" className={styles.card__text}>Email me</Typography>
                    <Typography variant="body1" className={styles.card__text}>athiravinod.mec@gmail.com</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs={2} className={styles.box__items}>
                    <CallIcon className={styles.icon} />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1" className={styles.card__text}>Make a call</Typography>
                    <Typography variant="body1" className={styles.card__text}>9995331498</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
            <Grid item xs={12}>
              <div className={styles.checkbox_grid}>
                {checkboxItems.map((item, index) => (
                  <label key={index} className={styles.check__container}>
                    <input type="checkbox" checked="checked" />
                    <div className={styles.checkmark}></div>
                    <Typography variant="subtitle" className={styles.item}>{item}</Typography>
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
