import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { hipaaComplianceStyles } from '../styles/hipaaCostStyle';
import financialImpactIcon from '../images/financial-impact.png';
import legalConsequencesIcon from '../images/legal-consequences.png';
import brandDamageIcon from '../images/brand-loss.png';

interface ComplianceItem {
  id: number;
  icon: string;
  title: string;
  text: string;
}

const complianceData: ComplianceItem[] = [
  {
    id: 1,
    icon: financialImpactIcon.src,
    title: "Financial Impact",
    text: "Penalties of up to $1.8 million per year for each violation",
  },
  {
    id: 2,
    icon: legalConsequencesIcon.src,
    title: "Legal Consequences",
    text: "Imprisonment for up to 1 year",
  },
  {
    id: 3,
    icon: brandDamageIcon.src,
    title: "Brand Damage",
    text: "Loss of trust and eroded reputation",
  }
];

const HIPAACOST: React.FC = () => {
  return (
    <Box sx={hipaaComplianceStyles.section}>
      <Container maxWidth="lg">
        <Box sx={hipaaComplianceStyles.containerBox}>
          <Typography variant="h4" component="h2" sx={hipaaComplianceStyles.heading}>
            Cost of HIPAA non-compliance
          </Typography>
          <Typography variant="body1" sx={hipaaComplianceStyles.subheading}>
            Understanding the serious consequences of failing to comply with HIPAA regulations
          </Typography>
        </Box>

        <Grid container spacing={1} justifyContent="center">
          {complianceData.map((item) => (
            <Grid size={{xs:12,sm:6,md:4}} key={item.id}>
              <Box sx={hipaaComplianceStyles.card}>
                <Box sx={hipaaComplianceStyles.iconContainer}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={hipaaComplianceStyles.iconImage}
                  />
                </Box>
                <Box sx={hipaaComplianceStyles.textContainer}>
                  <Typography variant="h6" sx={hipaaComplianceStyles.title}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={hipaaComplianceStyles.description}>
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HIPAACOST;