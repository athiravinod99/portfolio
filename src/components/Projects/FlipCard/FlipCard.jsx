import styles from "./FlipCard.module.css"
import { Grid, Card, CardContent, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const FlipCard = (props) => {
    return (
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <Card
            className={styles.flipCardFront}
            style={{ border: "1px solid #ccc", height: "300px" }}
          >
            <CardContent className={styles.cardContent}>
                <img
                  src={props.image}
                  alt="travel"
                  className={styles.image}
                />
                <div className={styles.moreDetails}>
                <Typography variant="body1" className={styles.subtitle}><ArrowOutwardIcon />Live</Typography>
                <Typography variant="body1" className={styles.icon}><GitHubIcon /></Typography>
                </div>
              <Typography variant="h6" className={styles.cardTitle}>
                {props.title}
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={styles.flipCardBack}
            style={{
              border: "1px solid #ccc",
              height: "300px",
            }}
          >
            <CardContent className={styles.cardContent}>
              <Typography variant="body1" className={styles.description}>
                {props.description}
              </Typography>
              <Typography variant="body1" className={styles.description}>
                Technologies used: {props?.technologies}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}