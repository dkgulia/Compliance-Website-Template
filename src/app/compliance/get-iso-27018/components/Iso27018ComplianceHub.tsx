'use client';
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import iso27018ComplianceHubStyle from '../styles/iso27018ComplianceHubStyle';
import { iso27018Features } from '../constants/iso27018Data';
import theme from '../../../../theme';

const Iso27018ComplianceHub: React.FC = () => {
  return (
    <Box id="iso27018-compliance-hub" sx={iso27018ComplianceHubStyle.box}>
      <Container sx={iso27018ComplianceHubStyle.container}>
        <Box sx={iso27018ComplianceHubStyle.containerBox}>
          <Typography component="h2" variant="h4" sx={iso27018ComplianceHubStyle.heading}>
            ISO 27018 Compliance Hub
          </Typography>
          <Typography variant="body1" sx={iso27018ComplianceHubStyle.subHeading}>
            A structured approach to help organizations secure personally identifiable information in the cloud.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {iso27018Features.map(({ id, title, description, icon: Icon }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
              <Box sx={iso27018ComplianceHubStyle.stepContainer}>
                <Box sx={iso27018ComplianceHubStyle.iconContainer}>
                  <Icon sx={iso27018ComplianceHubStyle.icon} />
                </Box>
                <Box sx={iso27018ComplianceHubStyle.textContainer}>
                  <Typography variant="body1" sx={iso27018ComplianceHubStyle.title}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={iso27018ComplianceHubStyle.description}>
                    {description}
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

export default Iso27018ComplianceHub;