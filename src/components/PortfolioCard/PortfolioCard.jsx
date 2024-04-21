import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./PortfolioCard.module.css";

export const PortfolioCard = ({ title, subtitle, content }) => {
  return (
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
  );
};
