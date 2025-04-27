'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import complianceFrameworksStyle from '../styles/complianceFrameworksStyle';
import hexafortData from '../constant/dataFile';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`framework-tabpanel-${index}`}
      aria-labelledby={`framework-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={complianceFrameworksStyle.tabPanel}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `framework-tab-${index}`,
    'aria-controls': `framework-tabpanel-${index}`,
  };
}

const ComplianceFrameworks: React.FC = () => {
  const [value, setValue] = useState(0);
  const { complianceFrameworks } = hexafortData;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={complianceFrameworksStyle.container}>
      <Container maxWidth="xl" disableGutters>
        <Box sx={complianceFrameworksStyle.contentContainer}>
          <Box sx={complianceFrameworksStyle.sectionHeader}>
            <Typography variant="h2" sx={complianceFrameworksStyle.title}>
              Compliance Frameworks
            </Typography>
            <Typography sx={complianceFrameworksStyle.subtitle}>
              Our comprehensive package includes implementation and certification for{' '}
              <Box component="span" sx={complianceFrameworksStyle.highlightedText}>
                ISO 27001
              </Box>
              ,{' '}
              <Box component="span" sx={complianceFrameworksStyle.highlightedText}>
                SOC 2 Type I & II
              </Box>
              , and{' '}
              <Box component="span" sx={complianceFrameworksStyle.highlightedText}>
                GDPR
              </Box>{' '}
              compliance, providing everything your startup needs to build customer trust.
            </Typography>
          </Box>

          <Box sx={complianceFrameworksStyle.tabsContainer}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="secondary"
              aria-label="compliance frameworks tabs"
            >
              {complianceFrameworks.map((framework, index) => (
                <Tab
                  key={framework.id}
                  label={framework.name}
                  sx={complianceFrameworksStyle.tab}
                  {...a11yProps(index)}
                />
              ))}
            </Tabs>
          </Box>

          {complianceFrameworks.map((framework, index) => (
            <TabPanel key={framework.id} value={value} index={index}>
              <Box sx={complianceFrameworksStyle.frameworkContainer}>
                <Box sx={complianceFrameworksStyle.frameworkInfo}>
                  <Typography variant="h3" sx={complianceFrameworksStyle.frameworkTitle}>
                    {framework.fullName}
                  </Typography>
                  <Typography sx={complianceFrameworksStyle.frameworkDescription}>
                    {framework.description}
                  </Typography>

                  {/* Display framework-specific content based on its ID */}
                  {framework.id === 'iso27001' && framework.stages && (
                    <Box sx={complianceFrameworksStyle.stagesContainer}>
                      <Typography variant="h4" sx={complianceFrameworksStyle.stageName} mb={2}>
                        Key Implementation Stages
                      </Typography>
                      {framework.stages.map((stage, stageIndex) => (
                        <Box key={stageIndex} sx={complianceFrameworksStyle.stageItem}>
                          <CheckCircleOutlineIcon sx={complianceFrameworksStyle.stageIcon} />
                          <Box sx={complianceFrameworksStyle.stageContent}>
                            <Typography sx={complianceFrameworksStyle.stageName}>
                              {stage.name}
                            </Typography>
                            <Typography sx={complianceFrameworksStyle.stageDescription}>
                              {stage.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {framework.id === 'soc2type1' && framework.trustCriteria && (
                    <Box sx={complianceFrameworksStyle.stagesContainer}>
                      <Typography variant="h4" sx={complianceFrameworksStyle.stageName} mb={2}>
                        Trust Services Criteria
                      </Typography>
                      {framework.trustCriteria.map((criteria, critIndex) => (
                        <Box key={critIndex} sx={complianceFrameworksStyle.stageItem}>
                          <CheckCircleOutlineIcon sx={complianceFrameworksStyle.stageIcon} />
                          <Box sx={complianceFrameworksStyle.stageContent}>
                            <Typography sx={complianceFrameworksStyle.stageName}>
                              {criteria.name}
                            </Typography>
                            <Typography sx={complianceFrameworksStyle.stageDescription}>
                              {criteria.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {framework.id === 'gdpr' && framework.components && (
                    <Box sx={complianceFrameworksStyle.stagesContainer}>
                      <Typography variant="h4" sx={complianceFrameworksStyle.stageName} mb={2}>
                        Key Components
                      </Typography>
                      {framework.components.map((component, compIndex) => (
                        <Box key={compIndex} sx={complianceFrameworksStyle.stageItem}>
                          <CheckCircleOutlineIcon sx={complianceFrameworksStyle.stageIcon} />
                          <Box sx={complianceFrameworksStyle.stageContent}>
                            <Typography sx={complianceFrameworksStyle.stageName}>
                              {component.title}
                            </Typography>
                            <Typography sx={complianceFrameworksStyle.stageDescription}>
                              {component.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    sx={complianceFrameworksStyle.viewMoreButton}
                  >
                    Learn more about {framework.name}
                  </Button>
                </Box>

                <Box sx={complianceFrameworksStyle.pricingCard}>
                  <Box sx={complianceFrameworksStyle.pricingHeader}>
                    <Typography sx={complianceFrameworksStyle.pricingTitle}>
                      Implementation Cost
                    </Typography>
                    <Typography sx={complianceFrameworksStyle.price}>
                      ${framework.cost}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Part of the complete package
                    </Typography>
                  </Box>

                  <Box component="ul" sx={complianceFrameworksStyle.featuresList}>
                    {(framework.deliverables || []).slice(0, 3).map((deliverable, i) => (
                      <Box component="li" key={i} sx={complianceFrameworksStyle.featureItem}>
                        <CheckCircleOutlineIcon sx={complianceFrameworksStyle.featureIcon} />
                        <Typography sx={complianceFrameworksStyle.featureText}>
                          {deliverable.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: '1.5rem',
                      color: '#f9fafb',
                      fontWeight: 800,
                      padding: {
                        xs: '0.25rem 0.5rem',
                        sm: '0.375rem 0.75rem',
                        md: '0.7rem 1rem',
                      },
                      borderRadius: '0.5rem',
                      backgroundColor: '#1f2937',
                      border: '1px solid #4b5563',
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                      transition: 'background-color 150ms ease',
                      '&:hover': {
                        backgroundColor: '#374151',
                        borderColor: '#4b5563',
                      },
                      '&.Mui-disabled': {
                        color: '#f9fafb',
                        opacity: 0.5,
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ComplianceFrameworks;