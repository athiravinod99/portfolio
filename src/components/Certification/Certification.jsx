import React, { useState } from 'react';
import { CertificationCard } from './CertificationCard/CertificationCard';
import { Title } from '../Title/Title';
import styles from './Certification.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const Certification = () => {
  const certifications = [
    { content: 'HackerRank Frontend Developer', cardContent: 'React' },
    { content: 'Digital Skills: User Experience Accenture', cardContent: 'UX' },
    { content: 'LinkedIn Learning Next js', cardContent: 'Next js' },
    { content: 'Angular js', cardContent: 'Angular' },
    { content: 'Python', cardContent: 'Python' },
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
        <div className={styles.buttonContainer}>
            <ArrowBackIcon className={styles.prevButton} onClick={handlePrev} />
        </div>
        <div className={styles.cards}>
          {certifications.slice(startIndex, startIndex + 3).map((certification, index) => (
            <CertificationCard key={index} content={certification.content} cardContent={certification.cardContent} />
          ))}
        </div>
        <div className={styles.buttonContainer}>
            <ArrowForwardIcon className={styles.nextButton} onClick={handleNext}/>
        </div>
      </div>
    </section>
  );
};
