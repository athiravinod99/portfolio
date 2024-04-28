// Skills section
import React, { useState } from "react";
import { Tabs, Tab, Typography, Grid, Container } from "@mui/material";
import styles from "./Skills.module.css";
import bootstrap from "../../assets/hero/bootstrap.svg";
import reactImg from "../../assets/hero/reactImg.svg";
import htmlImg from "../../assets/hero/htmlImg.svg";
import { Title } from "../Title/Title";
import sassImg from "../../assets/hero/sassImg.svg";
import tailwindImg from "../../assets/hero/tailwindImg.svg";
import gitImg from "../../assets/hero/gitImg.svg";
import jsImg from "../../assets/hero/jsImg.svg";
import cssImg from "../../assets/hero/cssImg.svg";
import angularImg from "../../assets/hero/angularImg.svg";
import nodejs from "../../assets/hero/nodejs.svg";
import tsImg from "../../assets/hero/tsImg.svg";
import pythonImg from "../../assets/hero/pythonImg.svg";
import muiImg from "../../assets/hero/muiImg.svg";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", value: 90, img: htmlImg },
        { name: "CSS", value: 80, img: cssImg },
        { name: "JavaScript", value: 85, img: jsImg },
        { name: "TypeScript", value: 85, img: tsImg },
        { name: "Python", value: 85, img: pythonImg },
        { name: "SASS/LESS", value: 85, img: sassImg },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React js", value: 80, img: reactImg },
        { name: "Angular js", value: 75, img: angularImg },
        { name: "Next js", value: 70, img: nodejs },
        { name: "Bootstrap js", value: 70, img: bootstrap },
        { name: "Material UI", value: 70, img: muiImg },
        { name: "Tailwind CSS", value: 70, img: tailwindImg },
      ],
    },
    {
      title: "Design & API Tools ",
      skills: [
        { name: "Axios Library",  value: 70, img: gitImg },
        { name: "Swagger",  value: 70, img: bootstrap },
        { name: "Postman",  value: 70, img: bootstrap },
        { name: "Figma",  value: 70, img: bootstrap },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Github",  value: 70, img: bootstrap },
        { name: "Bitbucket",  value: 70, img: bootstrap },
        { name: "Smart Git",  value: 70, img: bootstrap },
        { name: "JIRA", value: 70, img: bootstrap },
      ],
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={styles.skills__container}>
      <Title title="My Skills" subtitle="Professional Skills" />
      <Tabs
        value={activeTab}
        onChange={handleChangeTab}
        aria-label="Skills Tabs"
        className={styles.tabs}
        variant="button"
      >
        {skillsData.map((item, index) => (
          <Tab
            key={index}
            label={item.title}
            className={`${styles.tab__button} ${
              activeTab === index ? styles.activeTabButton : ""
            }`}
            style={{
              backgroundColor:
                activeTab === index ? "orange" : "rgb(31, 31, 31)",
              color: activeTab === index ? "black" : "white",
              flexGrow: 1,
              border: activeTab === index ? "3px solid orange" : "none",
              borderBottom: activeTab === index ? "none" : "3px solid orange",
              fontWeight: activeTab === index ? "600" : "500",
              indicatorColor:
                activeTab === index ? "orange" : "rgb(31, 31, 31)",
            }}
          />
        ))}
      </Tabs>
      <div className={styles.skill}>
        {skillsData[activeTab].skills.map((skill, index) => (
          <div
            key={index}
            className={index < 3 ? styles.skill__line1 : styles.skill__line2}
          >
            <Grid container>
              <Grid item xs={2}>
                <img src={skill.img} alt={skill.name} className={styles.img} />
              </Grid>
              <Grid item xs={10}>
                <div className={styles.skill__details}>
                  <Typography variant="body1" className={styles.skill__name}>
                    {skill.name}
                  </Typography>
                  <Typography variant="body1" className={styles.skill__value}>
                    {skill.value ? `${skill.value}%` : ""}
                  </Typography>
                </div>

                <div className={styles.progressbar__container}>
                  <div
                    className={styles.progressbar}
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
