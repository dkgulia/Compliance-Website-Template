'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { platformData } from '../constants/platformData';
import Image from 'next/image';
import step1Image from '../images/Dashboard Interface with Security Icons.png';
import step2Image from '../images/AI Automation and Suggestions Icon.png';
import step3Image from '../images/Cybersecurity Awareness Illustration.png';
import step4Image from '../images/Grid and Protection in Teal.png';

const stepImages = [step1Image, step2Image, step3Image, step4Image];

const FeaturesSection: React.FC = () => {
 const { features } = platformData;

 return (
   <Box sx={featuresSectionStyle.section}>
     <Box sx={featuresSectionStyle.headerContainer}>
       <Typography sx={featuresSectionStyle.tagline}>
         HOW IT WORKS
       </Typography>

       <Typography sx={featuresSectionStyle.title}>
         {features.title}
       </Typography>

       <Typography sx={featuresSectionStyle.subtitle}>
         Simple steps to secure your enterprise infrastructure
       </Typography>
     </Box>

     <Box sx={featuresSectionStyle.stepsContainer}>
       {features.steps.map((step, index) => {
         const imageFirst = index % 2 === 0;

         return (
           <Box
             key={index}
             sx={{
               ...featuresSectionStyle.stepWrapper,
               ...(imageFirst ? {} : featuresSectionStyle.stepWrapperReverse),
             }}
           >
             <Box sx={featuresSectionStyle.imageContainer}>
               <Image
                 src={stepImages[index]}
                 alt={step.heading}
                 width={400}
                 height={300}
                 style={{
                   maxWidth: '100%',
                   height: 'auto',
                   borderRadius: '1rem',
                 }}
               />
             </Box>

             <Box sx={featuresSectionStyle.textContainer}>
               <Typography sx={featuresSectionStyle.stepNumber}>
                 Step {index + 1}
               </Typography>
               <Typography sx={featuresSectionStyle.stepTitle}>
                 {step.heading}
               </Typography>
               <Typography sx={featuresSectionStyle.stepDescription}>
                 {step.description}
               </Typography>
             </Box>
           </Box>
         );
       })}
     </Box>
   </Box>
 );
};

export default FeaturesSection;