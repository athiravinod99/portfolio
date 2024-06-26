// Certification card
import { Typography } from "@mui/material";
import styles from "./CertificationCard.module.css";

export const CertificationCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card__box}>
        <div className={styles.ribbon}>{props.title}</div>
        <div className={styles.card__content}>
        <Typography variant="h6" className={styles.organization}>{props.organization}</Typography>
        <Typography variant="subtitle" className={styles.content}>{props.content}</Typography>
        {/* <Typography className={styles.content}>{props.link}</Typography> */}
        </div>
      </div>
    </div>
  );
};
