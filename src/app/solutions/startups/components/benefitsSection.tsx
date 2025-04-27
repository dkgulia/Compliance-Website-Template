'use client';
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShieldIcon from '@mui/icons-material/Shield';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import hexafortData from '../constant/dataFile';

const BenefitsSection: React.FC = () => {
  const { benefits, testimonials } = hexafortData;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };


  return (
    <Box sx={benefitsSectionStyle.container}>
      <Container maxWidth="xl" disableGutters>
        <Box sx={benefitsSectionStyle.contentContainer}>
          <Box sx={benefitsSectionStyle.sectionHeader}>
            <Typography variant="h2" sx={benefitsSectionStyle.title}>
              Benefits of Comprehensive Compliance
            </Typography>
            <Typography sx={benefitsSectionStyle.subtitle}>
              Implementing comprehensive compliance creates multiple benefits beyond certification itself. From accelerating sales cycles to reducing security risks and improving operational efficiency.
            </Typography>
          </Box>

          <Box sx={benefitsSectionStyle.benefitsWrapper}>
            {benefits.categories.map((category, index) => (
              <Box key={index} sx={benefitsSectionStyle.benefitCategory}>
                {index < benefits.categories.length - 1 && (
                  <Box sx={benefitsSectionStyle.benefitDivider} />
                )}

                <Box sx={benefitsSectionStyle.iconContainerStyle}>
                  {index === 0 && <TrendingUpIcon sx={{ color: 'white' }} />}
                  {index === 1 && <ShieldIcon sx={{ color: 'white' }} />}
                  {index === 2 && <SettingsIcon sx={{ color: 'white' }} />}
                </Box>

                <Typography variant="h3" sx={benefitsSectionStyle.categoryTitle}>
                  {category.title}
                </Typography>

                <Typography sx={benefitsSectionStyle.categoryDescription}>
                  {category.description}
                </Typography>

                <Box component="ul" sx={benefitsSectionStyle.pointsList}>
                  {category.points.map((point, pointIndex) => (
                    <Box component="li" key={pointIndex} sx={benefitsSectionStyle.pointItem}>
                      <CheckCircleOutlineIcon sx={benefitsSectionStyle.pointIcon} />
                      <Typography sx={benefitsSectionStyle.pointText}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={benefitsSectionStyle.ctaContainer}>
            <Typography variant="h3" sx={benefitsSectionStyle.ctaTitle}>
              Ready to secure your business?
            </Typography>
            <Typography sx={benefitsSectionStyle.ctaDescription}>
              Our experts are ready to help you navigate the complex world of compliance and security.
              Get started today and build a strong foundation for your startup's growth.
            </Typography>
            <Button variant="contained" sx={benefitsSectionStyle.ctaButton}>
              Schedule a Consultation
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;