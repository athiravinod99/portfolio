import { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import styles from "./Title.module.css";

export const Title = (props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.classList.add(styles.animated);
        }
      });
    }, { threshold: 0.5 }); // Change the threshold as needed

    observer.observe(container);

    // Clean up
    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <Typography variant="h3" className={styles.title}>{props.title}</Typography>
      <Typography variant="h6" className={styles.subtitle}>{props.subtitle}</Typography>
    </div>
  );
};
