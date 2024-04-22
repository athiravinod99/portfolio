import React, { useState } from "react";
import { Tabs, Tab, LinearProgress, Typography, Grid, Container } from "@mui/material";
import styles from "./Skills.module.css";
import react from "../../assets/hero/react.png";
import cssImg from "../../assets/hero/cssImg.jpg";
import htmlImg from "../../assets/hero/htmlImg.jpg";
import javascriptImg from "../../assets/hero/javascriptImg.jpg";
import sassImg from "../../assets/hero/sassImg.jpg";
import githubImg from "../../assets/hero/githubImg.jpg";
import { Title } from "../Title/Title";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", value: 90, img: htmlImg },
        { name: "CSS", value: 80, img: cssImg },
        { name: "JavaScript", value: 85, img: javascriptImg },
        { name: "TypeScript", value: 85, img: javascriptImg },
        { name: "Python", value: 85, img: react },
        { name: "SASS/LESS", value: 85, img: sassImg },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React js", value: 80, img: react },
        { name: "Angular js", value: 75 },
        { name: "Redux", value: 70 },
        { name: "Bootstrap js", value: 70 },
        { name: "Material UI", value: 70 },
        { name: "Tailwind CSS", value: 70 },
      ],
    },
    {
      title: "API Tools",
      skills: [
        { name: "Github", value: 80, img: githubImg},
        { name: "Bitbucket", value: 70 },
        { name: "Smart Git", value: 70 },
        { name: "JIRA", value: 70 },
        { name: "Swagger", value: 70 },
        { name: "Postman", value: 70 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Adaptability" },
        { name: "Time Management" },
        { name: "Collabarative" },
        { name: "Problem Solving"},
      ],
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (

      
    
    <div className={styles.skillsContainer}>
    <Title title="My Skills" subtitle="Professional Skills"/>
          
      <Tabs
        value={activeTab}
        onChange={handleChangeTab}
        aria-label="Skills Tabs"
        className={styles.tabs}
      >
        {skillsData.map((item, index) => (
          <Tab key={index} label={item.title} className={styles.tab}/>
        ))}
      </Tabs>
      <div className={styles.skill}>
        {skillsData[activeTab].skills.map((skill, index) => (
          <div key={index} className={index < 3 ? styles.skillLine1 : styles.skillLine2}>
          <Grid container className={styles.skillBox} >
          <Grid item xs={4}>
          {skill.img && <img src={skill.img} alt={skill.name} className={styles.img} />}
          </Grid>
          <Grid item xs={8}>
          <Typography variant="h6" className={styles.skillName}>
              {skill.name} {skill.value ? `${skill.value}%` : ''}
            </Typography>
            {skill.value && <LinearProgress variant="determinate" value={skill.value} className={styles.linearProgress}/>}
          </Grid>
        </Grid>
        </div>
        ))}
      </div>
    </div>

  );
};

export default Skills;
