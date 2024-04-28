// Contact section
import React from "react";
import { Grid, Card, CardContent, TextField, Typography } from "@mui/material";
import styles from "./Contact.module.css";
import MailIcon from "@mui/icons-material/Mail";
import { Title } from "../Title/Title";
import { PortfolioButton } from "../PortfolioButton/PortfolioButton";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <CallIcon />,
      name: "Phone",
      description: "+1234567890",
    },
    {
      icon: <MailIcon />,
      name: "Email",
      description: "myemail@email.com",
    },
    {
      icon: <MailIcon />,
      name: "LinkedIn",
      description: <a href="https://www.example.com">www.example.com</a>,
    },
    {
      icon: <MailIcon />,
      name: "Website",
      description: <a href="https://www.example.com">www.example.com</a>,
    },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Title title="Contact" subtitle="Feel free to reachout!" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ width: "90%", margin: "auto" }}>
          <Typography variant="h5" className={styles.icon__head}>
            Find me on
          </Typography>
          <div className={styles.main}>
            <div className={styles.up}>
              <button className={styles.card1}>
                <LinkedInIcon className={styles.linkedIn} />
              </button>
              <button className={styles.card2}>
                <GitHubIcon className={styles.github} />
              </button>
            </div>
            <div className={styles.down}>
              <button className={styles.card3}>
                <CallIcon className={styles.whatsapp} />
              </button>
              <button className={styles.card4}>
                <MailIcon className={styles.gmail} />
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={styles.form__card}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Name"
                      fullWidth
                      className={styles.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      label="Email"
                      type="email"
                      fullWidth
                      className={styles.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Phone"
                      fullWidth
                      className={styles.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Subject"
                      fullWidth
                      className={styles.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                      className={styles.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PortfolioButton buttonText="Submit" />
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
