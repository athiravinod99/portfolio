// Certification section
import React, { useState } from 'react';
import { CertificationCard } from './CertificationCard/CertificationCard';
import { Title } from '../Title/Title';
import styles from './Certification.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import reactImg from "../../assets/hero/reactImg.svg"
export const Certification = () => {
  const certifications = [
    { content: 'Frontend Developer (React)', title: 'React', organization: 'HackerRank' , link: '#', img: reactImg },
    { content: 'Digital Skills: User Experience', title: 'UX', organization: 'Accenture', link: '#', img: reactImg},
    { content: 'Learning Next js', title: 'Next js', organization: 'LinkedIn', link:'#', img: reactImg },
    { content: 'Assessment Skill Angular', title: 'Angular', organization: 'HackerRank', link:'#', img: reactImg },
    { content: 'Crash course on Python', title: 'Python', organization: 'Google', link:'#', img: reactImg },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < certifications.length - 3) {
      setStartIndex(startIndex + 3);
    }
  };
  
  const handlePrev = () => {
    if (startIndex >= 3) {
      setStartIndex(startIndex - 3);
    }
  };
  
  return (
    <section className={styles.container}>
      <Title title="Certifications" subtitle="Credentials of Achievement" />
      <div className={styles.carousel}>
        <div className={styles.button__container}>
            <ArrowBackIcon className={styles.prev__button} onClick={handlePrev} />
        </div>
        <div className={styles.cards}>
          {certifications.slice(startIndex, startIndex + 3).map((certification, index) => (
            <CertificationCard key={index} 
            image={certification.img}
            title={certification.title}
            organization={certification.organization} 
            content={certification.content} 
            link={certification.link}/>
          ))}
        </div>
        <div className={styles.button__container}>
            <ArrowForwardIcon className={styles.next__button} onClick={handleNext}/>
        </div>
      </div>
    </section>
  );
};
