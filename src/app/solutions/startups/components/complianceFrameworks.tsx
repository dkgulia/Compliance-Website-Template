'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Link,
} from '@mui/material';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
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
      {value === index && <Box sx={complianceFrameworksStyle.tabPanel}>{children}</Box>}
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
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getRedirectUrl = (frameworkId: string) => {
    switch (frameworkId) {
      case 'iso27001':
        return '/compliance/get-iso-27001';
      case 'soc2type1':
      case 'soc2type2':
      case 'soc2':
        return '/compliance/get-soc-2';
      case 'gdpr':
        return '/compliance/get-gdpr';
      default:
        return `/compliance/get-${frameworkId}`;
    }
  };

  const handleGetStarted = () => {
    router.push('/get-a-demo');
  };

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    setValue(event.target.value as number);
  };

  return (
    <Box sx={complianceFrameworksStyle.container}>
      <Container maxWidth="xl" disableGutters>
        <Box sx={complianceFrameworksStyle.contentContainer}>
          {/* ---------- Section header ---------- */}
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
                SOC&nbsp;2&nbsp;Type&nbsp;I&nbsp;&amp;&nbsp;II
              </Box>
              , and{' '}
              <Box component="span" sx={complianceFrameworksStyle.highlightedText}>
                GDPR
              </Box>{' '}
              compliance, providing everything your startup needs to build customer trust.
            </Typography>
          </Box>

          {/* ---------- Tabs / Select ---------- */}
          {!isMobile ? (
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
          ) : (
            <Box sx={complianceFrameworksStyle.mobileSelectContainer}>
              <FormControl fullWidth>
                <Select
                  value={value}
                  onChange={handleSelectChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select compliance framework' }}
                  sx={complianceFrameworksStyle.mobileSelect}
                >
                  {complianceFrameworks.map((framework, index) => (
                    <MenuItem key={framework.id} value={index}>
                      {framework.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

          {/* ---------- Panels ---------- */}
          {complianceFrameworks.map((framework, index) => (
            <TabPanel key={framework.id} value={value} index={index}>
              <Box sx={complianceFrameworksStyle.frameworkContainer}>
                {/* ---------- Left (info) ---------- */}
                <Box sx={complianceFrameworksStyle.frameworkInfo}>
                  <Typography variant="h3" sx={complianceFrameworksStyle.frameworkTitle}>
                    {framework.fullName}
                  </Typography>
                  <Typography sx={complianceFrameworksStyle.frameworkDescription}>
                    {framework.description}
                  </Typography>

                  {/* ISO stages */}
                  {framework.id === 'iso27001' && framework.stages && (
                    <Box sx={complianceFrameworksStyle.stagesContainer}>
                      <Typography variant="h4" sx={complianceFrameworksStyle.stageName} mb={2}>
                        Key Implementation Stages
                      </Typography>
                      {framework.stages.map((stage, i) => (
                        <Box key={i} sx={complianceFrameworksStyle.stageItem}>
                          <CheckCircleOutlineIcon sx={complianceFrameworksStyle.stageIcon} />
                          <Box sx={complianceFrameworksStyle.stageContent}>
                            <Typography sx={complianceFrameworksStyle.stageName}>{stage.name}</Typography>
                            <Typography sx={complianceFrameworksStyle.stageDescription}>
                              {stage.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* SOC-2 criteria */}
                  {framework.id === 'soc2type1' && framework.trustCriteria && (
                    <Box sx={complianceFrameworksStyle.stagesContainer}>
                      <Typography variant="h4" sx={complianceFrameworksStyle.stageName} mb={2}>
                        Trust Services Criteria
                      </Typography>
                      {framework.trustCriteria.map((criteria, i) => (
                        <Box key={i} sx={complianceFrameworksStyle.stageItem}>
                          <CheckCircleOutlineIcon sx={complianceFrameworksStyle.stageIcon} />
                          <Box sx={complianceFrameworksStyle.stageContent}>
                            <Typography sx={complianceFrameworksStyle.stageName}>{criteria.name}</Typography>
                            <Typography sx={complianceFrameworksStyle.stageDescription}>
                              {criteria.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* GDPR components */}
                  {framework.id === 'gdpr' && framework.components && (
                    <Box sx={complianceFrameworksStyle.stagesContainer}>
                      <Typography variant="h4" sx={complianceFrameworksStyle.stageName} mb={2}>
                        Key Components
                      </Typography>
                      {framework.components.map((component, i) => (
                        <Box key={i} sx={complianceFrameworksStyle.stageItem}>
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

                  {/* Learn-more link */}
                  <Link
                    color="primary"
                    href={getRedirectUrl(framework.id)}
                    component={NextLink}
                    sx={complianceFrameworksStyle.viewMoreButton}
                  >
                    <Typography variant="body2" sx={complianceFrameworksStyle.viewMoreText}>
                      Learn more about {framework.name}
                      <ArrowForwardIcon sx={complianceFrameworksStyle.viewMoreIcon} />
                    </Typography>
                  </Link>
                </Box>

                {/* ---------- Right (pricing card) ---------- */}
                <Box sx={complianceFrameworksStyle.pricingCard}>
                  <Box sx={complianceFrameworksStyle.pricingHeader}>
                    <Typography sx={complianceFrameworksStyle.pricingTitle}>
                      Implementation Cost
                    </Typography>
                    <Typography sx={complianceFrameworksStyle.price}>${framework.cost}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Part of the complete package
                    </Typography>
                  </Box>

                  <Box component="ul" sx={complianceFrameworksStyle.featuresList}>
                    {(framework.deliverables || []).slice(0, 3).map((d, i) => (
                      <Box component="li" key={i} sx={complianceFrameworksStyle.featureItem}>
                        <CheckCircleOutlineIcon sx={complianceFrameworksStyle.featureIcon} />
                        <Typography sx={complianceFrameworksStyle.featureText}>{d.title}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: '1.5rem',
                      color: '#f9fafb',
                      fontWeight: 800,
                      padding: { xs: '0.25rem 0.5rem', sm: '0.375rem 0.75rem', md: '0.7rem 1rem' },
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
                    onClick={handleGetStarted}
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
