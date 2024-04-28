import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import styles from "./Projects.module.css";
import travel from "../../assets/hero/travel.jpg";
import ecommerce from "../../assets/hero/ecommerce.jpg";
import hospital from "../../assets/hero/hospital.jpg";
import netflix from "../../assets/hero/netflix.jpg";
import recipe from "../../assets/hero/recipe.png";
import socialmedia from "../../assets/hero/socialmedia.jpg";
import { Title } from "../Title/Title";
import { FlipCard } from "./FlipCard/FlipCard";

const projectsRow1 = [
  {
    id: 1,
    title: "Hospital Management System",
    image: hospital,
    preview: 'preview',
    gitCode: 'preview',
    description: "It is a Hospital Application that provides with personal medical care with highest quality, by employing a holistic approach to your health problems, in a professional and patient-friendly atmosphere.",
    technologies: ["Angularjs, .Net, Web api, Bootstrap"],
  },
  {
    id: 2,
    title: "Netflix",
    image: netflix,
    preview: 'preview',
    gitCode: 'preview',
    description: "It is a responsive and dynamic streaming platform that closely resembles the user experience of Netflix. Users will be able to browse and stream a wide range of movies and TV shows seamlessly, enhancing their entertainment experience",
    technologies: ["Reactjs, Axios Library, Material-UI"],
  },
  {
    id: 3,
    title: "Travel Website",
    image: travel,
    preview: 'preview',
    gitCode: 'preview',
    description: "A platform dedicated to travel, offering information, services, and resources related to tourism",
    technologies: ["HTML5, CSS3, Bootstrap"],
  },
];

const projectsRow2 = [
  {
    id: 4,
    title: "E-commerce",
    image: ecommerce,
    preview: 'preview',
    gitCode: 'preview',
    description: "An ecommerce mobile app is a software application designed for smartphones and tablets that allows users to browse, select, and purchase products or services from an online store.",
    technologies: ["Nextjs, CSS"],
  },
  {
    id: 5,
    title: "Social Media Application",
    image: socialmedia,
    preview: 'preview',
    gitCode: 'preview',
    description: "A React and Material-UI powered social media app that connects people, shares updates, and fosters meaningful interactions in a user-friendly interface.",
    technologies: ["Reactjs, Contentful, GraphQL, Tailwind CSS"],
  },
  {
    id: 6,
    title: "Recipe Book",
    image: recipe,
    preview: 'preview',
    gitCode: 'preview',
    description: "We can add recipes and accordingly purchase the required ingredients for a recipe by adding it into the shopping list.",
    technologies: ["Gatsby, Contentful, GraphQL, Tailwind CSS"],
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
            <FlipCard image={item.image} preview={item.preview} gitCode={item.gitCode} title={item.title} description={item.description} technologies={item.technologies}/>
          </Grid>)}       
        </Grid>
      </section>
      <section className={styles.gridContainer}>
        <Grid container spacing={2}>
        {projectsRow2.map((item) => 
          <Grid item xs={4}>
            <FlipCard image={item.image} title={item.title} preview={item.preview} gitCode={item.gitCode} description={item.description} technologies={item.technologies}/>
          </Grid>)}   
        </Grid>
      </section>
    </section>
  );
};
