'use client';
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import nistComplianceWorkFlowStyles from '../styles/nistComplianceWorkFlowStyle';
import { nistWorkflow } from '../constants/nistComplianceData';

const NistComplianceWorkFlow = () => {
  return (
    <Box sx={nistComplianceWorkFlowStyles.box}>
      <Box sx={nistComplianceWorkFlowStyles.workflowOuterContainer}>
        <Box sx={nistComplianceWorkFlowStyles.workflowContainer}>
          <Grid container spacing={4} sx={nistComplianceWorkFlowStyles.gridWrapper}>
            <Grid size={{ xs: 12, md: 5 }} sx={nistComplianceWorkFlowStyles.leftSection}>
              <Box sx={nistComplianceWorkFlowStyles.chip}>Succeed with HexaFort</Box>
              <Typography variant="h4" sx={nistComplianceWorkFlowStyles.title}>
                Take the Complexity out of NIST CSF
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }} sx={nistComplianceWorkFlowStyles.rightSection}>
              <Typography variant="body1" sx={nistComplianceWorkFlowStyles.description}>
                Implementing NIST can feel daunting. HexaFort breaks it down into actionable steps, eliminating guesswork
                and manual checklists. With automated evidence collection and real-time reporting, you can confidently
                maintain compliance and quickly respond to new threats.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={nistComplianceWorkFlowStyles.cardsGrid}>
            {nistWorkflow.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <Box sx={nistComplianceWorkFlowStyles.card}>
                    <Box sx={nistComplianceWorkFlowStyles.iconContainer}>
                      <IconComponent sx={nistComplianceWorkFlowStyles.icon} />
                    </Box>
                    <Typography variant="body1" sx={nistComplianceWorkFlowStyles.cardTitle}>
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default NistComplianceWorkFlow;