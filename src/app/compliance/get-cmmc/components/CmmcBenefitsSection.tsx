'use client';
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { cmmcData } from '../constants/cmmcData';
import * as Icons from '@mui/icons-material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import GavelIcon from '@mui/icons-material/Gavel';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const benefitsData = [
 {
   id: 1,
   icon: <VerifiedUserIcon />,
   title: 'Enhanced Security Framework',
   description: 'CMMC provides a framework to protect sensitive information throughout the defense industrial base.'
 },
 {
   id: 2,
   icon: <LockIcon />,
   title: 'Controlled Unclassified Information',
   description: 'Protect CUI data with the appropriate security controls required by the DoD.'
 },
 {
   id: 3,
   icon: <GavelIcon />,
   title: 'DoD Contract Eligibility',
   description: 'Maintaining CMMC compliance ensures continued eligibility for valuable DoD contracts and partnerships.'
 },
 {
   id: 4,
   icon: <PeopleIcon />,
   title: 'Improved Organizational Trust',
   description: 'Demonstrate commitment to cybersecurity best practices, building trust with partners and customers.'
 },
 {
   id: 5,
   icon: <SecurityIcon />,
   title: 'Standardized Security Controls',
   description: 'Implement industry-recognized security controls that align with NIST standards and DoD requirements.'
 },
 {
   id: 6,
   icon: <SpeedIcon />,
   title: 'Streamlined Compliance Process',
   description: 'Simplify compliance through automated assessment tools and continuous monitoring capabilities.'
 },
];

const CmmcBenefitsSection: React.FC = () => {
 const benefitsSection = cmmcData.sections.find(
   (section) => section.Sno === '2' && section.blockType === 'Benefits'
 );

 if (!benefitsSection) return null;

 return (
   <Box sx={featuresSectionStyle.box}>
     <Container maxWidth="lg">
       <Box sx={featuresSectionStyle.containerBox}>
         <Typography
           component="h2"
           variant="h4"
           sx={featuresSectionStyle.heading}
         >
           {benefitsSection.content.title}
         </Typography>
         {benefitsSection.content.subtitle && (
           <Typography variant="body1" sx={featuresSectionStyle.subheading}>
             {benefitsSection.content.subtitle}
           </Typography>
         )}
       </Box>

       <Grid container spacing={{ xs: 2, md: 4 }}>
         {benefitsData.map((benefit) => (
           <Grid size={{xs:12,sm:6,md:4}}  key={benefit.id}>
             <Box sx={featuresSectionStyle.card}>
               <Box sx={featuresSectionStyle.iconContainer}>
                 {benefit.icon}
               </Box>
               <Box sx={featuresSectionStyle.textContainer}>
                 <Typography variant="h6" sx={featuresSectionStyle.typography.title}>
                   {benefit.title}
                 </Typography>
                 <Typography variant="body2" sx={featuresSectionStyle.typography.body}>
                   {benefit.description}
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

export default CmmcBenefitsSection;