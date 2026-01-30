'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import iso22301ImagesSectionStyles from '../styles/ccpaImagesSectionStyles';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const ISO22301ImagesSection = () => {
  return (
    <Box sx={iso22301ImagesSectionStyles.container}>
      <Container maxWidth="lg">
        <Box sx={iso22301ImagesSectionStyles.headingContainer}>
          <Typography variant="h4" sx={iso22301ImagesSectionStyles.sectionTitle}>
            How ComplianceHub Simplifies ISO 22301 Implementation
          </Typography>
          <Typography variant="body1" sx={iso22301ImagesSectionStyles.sectionSubtitle}>
            Our platform streamlines business continuity management with comprehensive tools and features
          </Typography>
        </Box>

        <Grid container spacing={4} sx={iso22301ImagesSectionStyles.gridContainer}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={iso22301ImagesSectionStyles.card}>
              <Box sx={iso22301ImagesSectionStyles.imageContainer}>
                <AccountTreeOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />
              </Box>
              <Typography variant="h6" sx={iso22301ImagesSectionStyles.cardTitle}>
                Business Continuity Planning
              </Typography>
              <Typography variant="body2" sx={iso22301ImagesSectionStyles.cardDescription}>
                Develop and manage comprehensive business continuity plans that identify critical functions and establish recovery time objectives to minimize operational disruptions.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={iso22301ImagesSectionStyles.card}>
              <Box sx={iso22301ImagesSectionStyles.imageContainer}>
                <AssessmentOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />
              </Box>
              <Typography variant="h6" sx={iso22301ImagesSectionStyles.cardTitle}>
                Risk Assessment & Analysis
              </Typography>
              <Typography variant="body2" sx={iso22301ImagesSectionStyles.cardDescription}>
                Identify potential threats and vulnerabilities to your organization with structured risk assessment tools that help prioritize resources and mitigation strategies.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper elevation={0} sx={iso22301ImagesSectionStyles.card}>
              <Box sx={iso22301ImagesSectionStyles.imageContainer}>
                <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 32, color: 'white' }} />
              </Box>
              <Typography variant="h6" sx={iso22301ImagesSectionStyles.cardTitle}>
                Incident Response Management
              </Typography>
              <Typography variant="body2" sx={iso22301ImagesSectionStyles.cardDescription}>
                Streamline your response to disruptive incidents with predefined workflows, communication templates, and role assignments that ensure swift and effective action.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ISO22301ImagesSection;