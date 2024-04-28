//Project card
import styles from "./FlipCard.module.css";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const FlipCard = (props) => {
  return (
    <div className={styles.project__card}>
      <div className={styles.card__inner}>
        <Card
          className={styles.card}
        >
          <CardContent className={styles.card__content}>
            <img src={props.image} alt="travel" className={styles.image} />
            <div className={styles.project__details}>
              <Typography variant="body1" className={styles.subtitle}>
                <ArrowOutwardIcon />
                Live
              </Typography>
              <Typography variant="body1" className={styles.icon}>
                <GitHubIcon />
              </Typography>
            </div>
            <Typography variant="h6" className={styles.card__title}>
              {props.title}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
