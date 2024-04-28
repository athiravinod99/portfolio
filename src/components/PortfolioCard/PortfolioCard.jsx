import { useEffect, useRef } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./PortfolioCard.module.css";

export const PortfolioCard = ({ title, subtitle, content }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.classList.add(styles.animated);
        }
      });
    }, { threshold: 0.5 }); // Change the threshold as needed

    observer.observe(container);

    // Clean up
    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <Card ref={containerRef} className={styles.card}>
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
