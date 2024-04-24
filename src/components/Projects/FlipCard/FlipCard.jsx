import styles from "./FlipCard.module.css"
import { Grid, Card, CardContent, Typography } from "@mui/material";

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
              <Typography variant="body1" className={styles.subtitle}>
                {props.title}
              </Typography>
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