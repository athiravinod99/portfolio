import {
  Card,
  CardContent,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import { CertificationCard } from "./CertificationCard/CertificationCard";
import { Title } from "../Title/Title";

export const Certification = () => {
  return (
    <>
      <Title
        title="Certifications"
        subtitle="Credentials of Achievement"
      />

      <Grid item xs={12} display="flex" justifyContent="space-around">
        <CertificationCard
          content="HackerRank Frontend Developer"
          cardContent="React"
        />
        <CertificationCard
          content="Digital Skills: User Experience Accenture"
          cardContent="UX"
        />
        <CertificationCard
          content="LinkedIn Learning Next js"
          cardContent="Next js"
        />
        <CertificationCard
          content="LinkedIn Learning Next js"
          cardContent="Angular"
        />
        <CertificationCard
          content="LinkedIn Learning Next js"
          cardContent="Python"
        />
      </Grid>
    </>
  );
};
