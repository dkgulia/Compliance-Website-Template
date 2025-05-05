import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import nistComplianceHubStyles from '../styles/nistComplianceHubStyle';
import { nistHub } from '../constants/nistComplianceData';
import theme from '../../../../theme';

const NistComplianceHub: React.FC = () => {
  return (
    <Box id="nist-compliance-hub" sx={nistComplianceHubStyles.box}>
      <Container sx={nistComplianceHubStyles.container}>
        <Box sx={nistComplianceHubStyles.containerBox}>
          <Typography component="h2" variant="h4" sx={nistComplianceHubStyles.heading}>
            NIST Compliance Hub
          </Typography>

          <Typography variant="body1" sx={nistComplianceHubStyles.subHeading}>
            A structured approach to help organizations build a robust cybersecurity program aligned with the NIST CSF.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {nistHub.map(({ id, title, description, icon: Icon }) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
              <Box sx={nistComplianceHubStyles.stepContainer}>
                <Box sx={nistComplianceHubStyles.iconContainer}>
                  <Icon sx={nistComplianceHubStyles.icon} />
                </Box>
                <Box sx={nistComplianceHubStyles.textContainer}>
                  <Typography variant="body1" sx={nistComplianceHubStyles.title}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={nistComplianceHubStyles.description}>
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

export default NistComplianceHub;