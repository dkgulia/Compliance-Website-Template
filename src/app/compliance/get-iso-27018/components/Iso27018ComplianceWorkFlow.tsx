'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { workflow } from '../constants/iso27018Data';
import iso27018ComplianceWorkFlowStyles from '../styles/iso27018ComplianceWorkFlowStyle';
import Iso27018ComplianceWorkFlowCard from './Iso27018ComplianceWorkFlowCard';
import theme from '../../../../theme';

const Iso27018ComplianceWorkFlow: React.FC = () => {
  return (
    <Box sx={iso27018ComplianceWorkFlowStyles.box}>
      <Box sx={iso27018ComplianceWorkFlowStyles.workflowOuterContainer}>
        <Box sx={iso27018ComplianceWorkFlowStyles.workflowContainer}>
          <Grid container spacing={4} sx={iso27018ComplianceWorkFlowStyles.gridWrapper}>
            <Grid size={{ xs: 12, md: 5 }} sx={iso27018ComplianceWorkFlowStyles.leftSection}>
              <Box sx={iso27018ComplianceWorkFlowStyles.chip}>Your Path to ISO 27018</Box>
              <Typography variant="h4" sx={iso27018ComplianceWorkFlowStyles.title}>
                Drive True Cloud Privacy Compliance
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={iso27018ComplianceWorkFlowStyles.rightSection}>
              <Typography variant="body1" sx={iso27018ComplianceWorkFlowStyles.description}>
                Our guided approach ensures you implement and maintain the necessary privacy controls in your cloud environment.
                From PII identification to breach response, HexaFort covers your complete lifecycle.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={iso27018ComplianceWorkFlowStyles.gridContainer}>
            {workflow.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Iso27018ComplianceWorkFlowCard title={item.title} icon={item.icon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Iso27018ComplianceWorkFlow;