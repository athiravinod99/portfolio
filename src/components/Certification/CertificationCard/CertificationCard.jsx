import { Typography } from "@mui/material";
import styles from "./CertificationCard.module.css";

export const CertificationCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <div className={styles.ribbon}>{props.cardContent}</div>
        <Typography className={styles.content}>{props.content}</Typography>
      </div>
    </div>
  );
};
