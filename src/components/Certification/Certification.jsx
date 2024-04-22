import { Typography } from "@mui/material";
import styles from "./Certification.module.css";

export const Certification = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <span style={{ content: `'${props.cardContent}'` }}></span>
        <Typography className={styles.content}>{props.content}</Typography>
      </div>
    </div>
  );
};
