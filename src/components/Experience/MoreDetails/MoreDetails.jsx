import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./MoreDetails.module.css";

export const MoreDetails = ({ title, subtitle, content }) => {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={styles.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            {subtitle}
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body1" className={styles.content}>
                {content}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={`${styles.card} ${styles.back}`}>
        <CardContent>
          {/* Additional content to be shown on the back side */}
          <Typography variant="body1">Additional Content</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
