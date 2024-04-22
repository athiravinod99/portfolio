import React from "react";
import styles from "./PortfolioButton.module.css";

export const PortfolioButton = (props) => {
  return (
    <button>
      <span className={styles.transition}></span>
      <span className={styles.gradient}></span>
      <span className={styles.label}>{props.buttonText}</span>
    </button>
  );
};
