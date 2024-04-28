import { Container, Grid, Typography } from "@mui/material";
import styles from "./PortfolioPair.module.css"

export const PortfolioPair = (props) => {
  return (
    <Container className={styles.container}>
      <Grid item xs={6}>
        <Typography variant="body1">{props.title}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">{props.value}</Typography>
      </Grid>
    </Container>
  );
};
