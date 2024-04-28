//Button Component
import React from "react";
import styles from "./PortfolioButton.module.css";
import { Typography } from "@mui/material";

export const PortfolioButton = (props) => {
  return (
    <button>
      <span className={styles.transition}></span>
      <span className={styles.gradient}></span>
      <Typography variant="body1" className={styles.label}>{props.buttonText}</Typography>
    </button>
  );
};
