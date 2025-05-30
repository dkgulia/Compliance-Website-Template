
'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import quickStartOnboardingStyle from '../styles/quickStartOnboardingStyle';
import { riskManagementData } from '../constants/riskManagementData';
import rightToKnowImage from '../images/upload (1).png';
import rightToDeleteImage from '../images/score.png';
import rightToOptOutImage from '../images/assets.png';
import noDiscriminationImage from '../images/monitor.png';

interface OnboardingStep {
   heading: string;
   description: string;
   image?: string;
   imagePrompt?: string;
}

const QuickStartOnboarding: React.FC = () => {
   const onboardingContent = riskManagementData.sections.find(
       (section) => section.Sno === '4' && section.blockType === 'Steps/Process'
   );

   // Default steps that match the image layout
   const defaultSteps: OnboardingStep[] = [
       {
           heading: "Import & Map",
           description: "Sync assets and existing registers via CSV/API."
       },
       {
           heading: "Customise Scoring",
           description: "Adjust likelihood, impact and CIA weights."
       },
       {
           heading: "Assess & Prioritise",
           description: "Run automated assessments; tackle top-impact risks first."
       },
       {
           heading: "Mitigate & Monitor",
           description: "Assign tasks, track status, export audit PDFs."
       }
   ];

   const steps: OnboardingStep[] = onboardingContent?.content?.steps || defaultSteps;

   const imageMap = [
       rightToKnowImage,
       rightToDeleteImage,
       rightToOptOutImage,
       noDiscriminationImage
   ];

   return (
       <Box sx={quickStartOnboardingStyle.section}>
           <Box sx={quickStartOnboardingStyle.headerContainer}>
               <Typography sx={quickStartOnboardingStyle.title}>
                   Quick-Start Onboarding
               </Typography>
           </Box>

           <Grid container spacing={2} sx={{ alignItems: 'stretch', maxWidth: '1200px', margin: '0 auto' }}>
               {steps.map((step, index) => (
                   <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                       <Box sx={quickStartOnboardingStyle.card}>
                           <Box sx={quickStartOnboardingStyle.imageContainer}>
                               <Image
                                   src={imageMap[index % imageMap.length]}
                                   alt={step.heading}
                                   width={80}
                                   height={80}
                                   style={{
                                       maxWidth: '100%',
                                       height: 'auto',
                                       objectFit: 'contain',
                                   }}
                               />
                           </Box>
                           <Box sx={quickStartOnboardingStyle.contentContainer}>
                               <Typography sx={quickStartOnboardingStyle.cardTitle}>
                                   {step.heading}
                               </Typography>
                               <Typography sx={quickStartOnboardingStyle.cardDescription}>
                                   {step.description}
                               </Typography>
                           </Box>
                       </Box>
                   </Grid>
               ))}
           </Grid>
       </Box>
   );
};

export default QuickStartOnboarding;