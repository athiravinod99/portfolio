import React, { useState } from "react";
import { Tabs, Tab, LinearProgress } from "@mui/material";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", value: 90 },
        { name: "CSS", value: 80 },
        { name: "JavaScript", value: 85 },
        // Add more frontend skills as needed
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", value: 80 },
        { name: "Express.js", value: 75 },
        { name: "MongoDB", value: 70 },
        // Add more backend skills as needed
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL", value: 80 },
        { name: "NoSQL", value: 70 },
        // Add more database skills as needed
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", value: 75 },
        { name: "Kubernetes", value: 70 },
        // Add more DevOps skills as needed
      ],
    },
  ];

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="skills-container">
      <div className="tabs">
      <Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
  <Tab value="one" label="Item One" />
  <Tab value="two" label="Item Two" />
  <Tab value="three" label="Item Three" />
</Tabs>
      </div>
    </div>
  );
};

