import { Typography } from "@mui/material";
import styles from "./CertificationCard.module.css";

export const CertificationCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <div className={styles.ribbon}>{props.title}</div>
        <div className={styles.cardContent}>
        <img src={props.image} height="50" width="50"/>
        <Typography variant="h6" className={styles.organization}>{props.organization}</Typography>
        <Typography variant="subtitle" className={styles.content}>{props.content}</Typography>
        {/* <Typography className={styles.content}>{props.link}</Typography> */}
        </div>
      </div>
    </div>
  );
};
