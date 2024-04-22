import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import styles from "./Projects.module.css";
import travel from "../../assets/hero/travel.png";
import { Title } from "../Title/Title";


const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    image: travel,
    description: "An online marketplace for buying and selling products.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Netflix",
    image: travel,
    description: "A platform for connecting with friends and sharing updates.",
    technologies: ["React", "Firebase", "Redux", "Material-UI"],
  },
  {
    id: 3,
    title: "Travel Website",
    image: travel,
    description: "A tool for organizing tasks and tracking progress.",
    technologies: ["Angular", "Node.js", "MongoDB", "Bootstrap"],
  },
  {
    id: 4,
    title: "E-commerce",
    image: travel,
    description: "A blog featuring travel stories, tips, and recommendations.",
    technologies: ["Gatsby", "Contentful", "GraphQL", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Social Media Application",
    image: travel,
    description: "A blog featuring travel stories, tips, and recommendations.",
    technologies: ["Gatsby", "Contentful", "GraphQL", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Recipe Book",
    image: travel,
    description: "A blog featuring travel stories, tips, and recommendations.",
    technologies: ["Gatsby", "Contentful", "GraphQL", "Tailwind CSS"],
  },
];

export const Projects = () => {
  return (
    <section className={styles.container}>
      <Title title="Latest Works" subtitle="Explore my popular projects" />
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={4} key={project.id}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <Card
                  className={styles.flipCardFront}
                  style={{ border: "1px solid #ccc", height: "300px" }}
                >
                  <CardContent className={styles.cardContent}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "50%" }}
                    />
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                      {project.title}
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  className={styles.flipCardBack}
                  style={{
                    border: "1px solid #ccc",
                    height: "300px",
                  }}
                >
                  <CardContent className={styles.cardContent}>
                    <Typography variant="body1">
                      {project.description}
                    </Typography>
                    <Typography variant="subtitle1">
                      Technologies used:
                    </Typography>
                    <ul>
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
