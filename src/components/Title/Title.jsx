import { Typography } from "@mui/material";
import styles from "./Title.module.css";

export const Title = (props) => {

  return (
      <div className={styles.container}>
        <Typography variant="h3" className={styles.title}>{props.title}</Typography>
        <Typography variant="h6" className={styles.subtitle}>{props.subtitle}</Typography>
      </div>
  );
};
