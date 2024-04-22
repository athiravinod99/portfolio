import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
} from "@mui/material";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";
import { Title } from "../Title/Title";


const experiences = [
  {
    title: "Frontend Developer",
    company: "CEROED",
    date: "July 2023 - Present",
    description:
      " Collaborated with the UX team using Figma for the design and also facilitated efficient communication with the backend team using swagger for REST API development",
  },
  {
    title: "Software Developer",
    company: "Livares Technology",
    date: "Feb 2023 - Jun 2023",
    description:
      "Developed and implemented an admin panel‑based project for hardware machines using IoT, by utilizing jQuery, AJAX, BootStrap and AngularJs",
  },
  {
    title: "Frontend Developer",
    company: "Terrific Minds",
    date: "Sept 2022 - Jan 2023",
    description:
      "Collaborated on e‑commerce projects, for dynamic and interactive website that ensured high traffic page views including optimized checkout pages that increased user clicks, using SASS/ LESS, HTML 5, Tailwind CSS and Magento's page builder including cross browser development",
  },
  {
    title: "Developer I",
    company: "UST",
    date: "Aug 2021 - Aug 2022",
    description:
      "Collaborated on e‑commerce projects, for dynamic and interactive website that ensured high traffic page views including optimized checkout pages that increased user clicks, using SASS/ LESS, HTML 5, Tailwind CSS and Magento's page builder including cross browser development",
  },
];
const educationData = [
  {
    year: "Govt. Model Engineering",
    institution: "2017-2021",
    degree: "Electronics & Communication",
  },
  {
    year: "ST. Teresa's C.G.H.S.S",
    institution: "2015-2017",
    degree: "Computer Science",
  },
  {
    year: "ST. Teresa's C.G.H.S.S",
    institution: "2015",
    degree: "High School",
  },
];

export const Experience = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < experiences.length - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className={styles.container}>
      <Title title="My Resume" subtitle="Education & Experience" />
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            {educationData.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <PortfolioCard
                      title={item.year}
                      subtitle={item.institution}
                      content={
                        <div className={styles.content}>
                          <p>{item.degree}</p>
                        </div>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))} 
          </Grid>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <div className={styles.tabcontainer}>
          <div className={styles.indicator}></div>
            <div className={styles.scroller}></div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            {experiences.map((experience, index) => (
              <Grid item xs={12} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={10}>
                    <PortfolioCard
                      title={experience.title}
                      subtitle={experience.company}
                      content={
                        <div className={styles.content}>
                          <p>{experience.date}</p>
                        </div>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
