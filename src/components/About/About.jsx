import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./About.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.section}>
        <h2 className={styles.title}>About Me</h2>
        <Grid container>
          <Grid item xs={6}>
            <p className={styles.paragraph}>
              I'm a frontend developer with experience in building responsive
              and optimized sites. I also have experience developing fast and
              optimized back-end systems and APIs. In addition, I have designed
              multiple landing pages and created design systems.
            </p>
            <div className={styles.info}>
              <h3>Name: Athira Vinod</h3>
              <p>Date of Birth: April 16, 1999</p>
              <p>Address: Ernakulam, Kerala, India</p>
            </div>
            <Card className={styles.card}>
              <CardContent>
                <Grid container>
                  <Grid item xs={6}>
                    <MailOutlineIcon />
                    <Typography>Email me</Typography>
                    <br />
                    <Typography>athiravinod.mec@gmail.com</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <CallIcon />
                    <Typography>Make a call</Typography>
                    <br />
                    <Typography>9995331498</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </div>
    </section>
  );
};
