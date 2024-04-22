import React from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import styles from "./Contact.module.css";
import MailIcon from "@mui/icons-material/Mail";
import { Title } from "../Title/Title";
import { PortfolioButton } from "../PortfolioButton/PortfolioButton";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <MailIcon />,
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
    // Implement logic to handle form submission
  };

  return (
    <div className={styles.container}>
      <Title title="Contact" subtitle="Feel free to reachout!" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ width: "90%", margin: "auto"}}>
          <div>
            {contactInfo.map((info, index) => (
              <Grid container alignItems="center" spacing={1} key={index} className={styles.contactIcons}>
                <Grid item className={styles.icon}>{info.icon}</Grid>
                <Grid item className={styles.iconDetails}>
                  <Typography variant="title" style={{fontWeight: 600}}>{info.name}</Typography>
                  <Typography variant="subtitle">{info.description}</Typography>
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={styles.formCard}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField required label="Name" fullWidth className={styles.input}/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required label="Email" type="email" fullWidth className={styles.input}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required label="Phone" fullWidth className={styles.input}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required label="Subject" fullWidth className={styles.input}/>
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
                    <PortfolioButton 
                     buttonText="Submit" />
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
