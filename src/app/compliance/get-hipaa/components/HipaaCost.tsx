import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LockIcon from '@mui/icons-material/Lock';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import { hipaaComplianceStyles } from '../styles/hipaaCostStyle';

interface ComplianceItem {
  id: number;
  icon: JSX.Element;
  title: string;
  text: string;
}

const complianceData: ComplianceItem[] = [
  {
    id: 1,
    icon: <MonetizationOnIcon sx={hipaaComplianceStyles.icon} />,
    title: "Financial Impact",
    text: "Penalties of up to $1.8 million per year for each violation",
  },
  {
    id: 2,
    icon: <LockIcon sx={hipaaComplianceStyles.icon} />,
    title: "Legal Consequences",
    text: "Imprisonment for up to 1 year",
  },
  {
    id: 3,
    icon: <LinkOffIcon sx={hipaaComplianceStyles.icon} />,
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

        <Grid container spacing={4} justifyContent="center">
          {complianceData.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <Box sx={hipaaComplianceStyles.card}>
                <Box sx={hipaaComplianceStyles.iconContainer}>
                  {item.icon}
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