'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import Image from 'next/image';
import ccpaRightsSectionStyles from '../styles/ccpaRightsSectionStyles';
import knowIcon from '../images/right-to-know.png';
import deleteIcon from '../images/right-to-delete-.png';
import optoutIcon from '../images/restrictions.png';
import nodiscriminationIcon from '../images/no-discrmination.png';

const CcpaRightsSection = () => {
  return (
    <Box sx={ccpaRightsSectionStyles.container}>
      <Container maxWidth="lg">
        <Box sx={ccpaRightsSectionStyles.headingContainer}>
          <Typography variant="h4" sx={ccpaRightsSectionStyles.sectionTitle}>
            Four Primary Rights of CCPA
          </Typography>
          <Typography variant="body1" sx={ccpaRightsSectionStyles.sectionSubtitle}>
            Under the California Consumer Privacy Act (CCPA), businesses must provide these key protections
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
              <Box sx={ccpaRightsSectionStyles.imageContainer}>
                <Image
                  src={knowIcon}
                  alt="Right to Know"
                  width={100}
                  height={100}
                  style={ccpaRightsSectionStyles.cardImage}
                />
              </Box>
              <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                Right to Know
              </Typography>
              <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                Consumers can request information about what personal data businesses collect and why.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
              <Box sx={ccpaRightsSectionStyles.imageContainer}>
                <Image
                  src={deleteIcon}
                  alt="Right to Delete"
                  width={100}
                  height={100}
                  style={ccpaRightsSectionStyles.cardImage}
                />
              </Box>
              <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                Right to Delete
              </Typography>
              <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                Consumers can request deletion of personal information with certain exceptions.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
              <Box sx={ccpaRightsSectionStyles.imageContainer}>
                <Image
                  src={optoutIcon}
                  alt="Right to Opt-Out"
                  width={100}
                  height={100}
                  style={ccpaRightsSectionStyles.cardImage}
                />
              </Box>
              <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                Right to Opt-Out
              </Typography>
              <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                Consumers can direct businesses not to sell their personal information.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
              <Box sx={ccpaRightsSectionStyles.imageContainer}>
                <Image
                  src={nodiscriminationIcon}
                  alt="No Discrimination"
                  width={100}
                  height={100}
                  style={ccpaRightsSectionStyles.cardImage}
                />
              </Box>
              <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                No Discrimination
              </Typography>
              <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                Businesses cannot penalize consumers for exercising their CCPA rights.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={ccpaRightsSectionStyles.requestProcessContainer}>
          <Box sx={ccpaRightsSectionStyles.headingContainer}>
            <Typography variant="h4" sx={ccpaRightsSectionStyles.sectionTitle}>
              Request Process
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
                <Box sx={ccpaRightsSectionStyles.requestNumberCircle}>
                  <Typography sx={ccpaRightsSectionStyles.requestNumber}>1</Typography>
                </Box>
                <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                  Submit Request
                </Typography>
                <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                  Consumer submits a formal CCPA rights request through designated channels.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
                <Box sx={ccpaRightsSectionStyles.requestNumberCircle}>
                  <Typography sx={ccpaRightsSectionStyles.requestNumber}>2</Typography>
                </Box>
                <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                  Verify Identity
                </Typography>
                <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                  Business confirms the identity of the consumer making the request.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
                <Box sx={ccpaRightsSectionStyles.requestNumberCircle}>
                  <Typography sx={ccpaRightsSectionStyles.requestNumber}>3</Typography>
                </Box>
                <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                  45-Day Response
                </Typography>
                <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                  Business acknowledges and responds to the request within 45 days.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={3} sx={ccpaRightsSectionStyles.card}>
                <Box sx={ccpaRightsSectionStyles.requestNumberCircle}>
                  <Typography sx={ccpaRightsSectionStyles.requestNumber}>4</Typography>
                </Box>
                <Typography variant="h5" sx={ccpaRightsSectionStyles.cardTitle}>
                  Action Taken
                </Typography>
                <Typography variant="body2" sx={ccpaRightsSectionStyles.cardDescription}>
                  Business completes the requested action and provides confirmation.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CcpaRightsSection;