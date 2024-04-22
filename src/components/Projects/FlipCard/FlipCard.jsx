import styles from "./FlipCard.module.css"
import { Grid, Card, CardContent, Typography } from "@mui/material";
import travel from "../../../assets/hero/travel.png";

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
                style={{ width: "100%", height: "100%" }}
              />
              <Typography variant="h6" style={{ marginTop: "8px" }}>
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
              <Typography variant="body1">
                {props.description}
              </Typography>
              <Typography variant="subtitle1">
                {props.technologies}
              </Typography>
              <ul>
               <li>react</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}