import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import styles from "./Projects.module.css";
import travel from "../../assets/hero/travel.png";
import { Title } from "../Title/Title";
import { FlipCard } from "./FlipCard/FlipCard";

const projectsRow1 = [
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
];

const projectsRow2 = [
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
      <section className={styles.gridContainer}>
        <Title title="Latest Works" subtitle="Explore my popular projects" />
        <Grid container spacing={2}>
          {projectsRow1.map((item) => 
          <Grid item xs={4}>
            <FlipCard image={item.image} title={item.title} description={item.description} technologies={item.technologies}/>
          </Grid>)}       
        </Grid>
      </section>
      <section className={styles.gridContainer}>
        <Grid container spacing={2}>
        {projectsRow2.map((item) => 
          <Grid item xs={4}>
            <FlipCard image={item.image} title={item.title} description={item.description} technologies={item.technologies}/>
          </Grid>)}   
        </Grid>
      </section>
    </section>
  );
};
