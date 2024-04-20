import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import { Card } from "@mui/material";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ABC Corp",
    date: "2022 - Present",
    description:
      "Developed user-friendly interfaces and implemented responsive designs for web applications using React.js.",
  },
  {
    title: "Backend Developer",
    company: "XYZ Inc",
    date: "2020 - 2022",
    description:
      "Designed and developed robust and scalable RESTful APIs using Node.js and Express.js.",
  },
  {
    title: "Backend Developer",
    company: "XYZ Inc",
    date: "2020 - 2022",
    description:
      "Designed and developed robust and scalable RESTful APIs using Node.js and Express.js.",
  },
  // Add more experiences as needed
];

export const Experience = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStep < experiences.length - 1) {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }, 2000); // Change duration as needed
    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className={styles.container}>
      {experiences.map((experience, index) => (
        <div key={index} className={`${styles.step} ${currentStep === index ? styles.active : ""} ${currentStep > index ? styles.completed : ""}`}>
          <div className={styles.vStepper}>
            <div className={`${styles.circle} ${currentStep === index ? styles.activeCircle : ""}`} />
            {index !== experiences.length - 1 && <div className={styles.line} />}
          </div>
          <Card>
          <div className={styles.content}>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.date}</p>
            <p>{experience.description}</p>
          </div></Card>
        </div>
      ))}
    </div>
  );
};
