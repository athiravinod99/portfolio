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

export const Contact = () => {
  const contactInfo = [
    {
      icon: <MailIcon />,
      name: "Address",
      description: "123 Street, City, Country",
    },
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
      <Typography variant="h5" className={styles.title}>
        Contact Me
      </Typography>
      <Typography variant="h6" className={styles.title}>
        Feel free to reachout!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            {contactInfo.map((info, index) => (
              <Grid container alignItems="center" spacing={1} key={index}>
                <Grid item>{info.icon}</Grid>
                <Grid item>
                  <Typography>{info.name}</Typography>
                  <Typography>{info.description}</Typography>
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
        {/* Second section with contact form */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField required label="Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required label="Email" type="email" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required label="Phone" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required label="Subject" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
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
