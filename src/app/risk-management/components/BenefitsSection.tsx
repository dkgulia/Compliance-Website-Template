'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
 Tune as TuneIcon,
 Security as SecurityIcon,
 Insights as InsightsIcon,
 CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';

const BenefitsSection: React.FC = () => {
 const benefitsContent = riskManagementData.sections.find(
   (section) => section.Sno === '2' && section.blockType === 'Benefits'
 );

 if (!benefitsContent) return null;

 const iconMap: Record<string, React.ReactNode> = {
   Tune: <TuneIcon sx={benefitsSectionStyle.icon} />,
   Security: <SecurityIcon sx={benefitsSectionStyle.icon} />,
   Insights: <InsightsIcon sx={benefitsSectionStyle.icon} />,
   CheckCircle: <CheckCircleIcon sx={benefitsSectionStyle.icon} />,
 };

 return (
   <Box sx={benefitsSectionStyle.section}>
     <Box sx={benefitsSectionStyle.headerContainer}>
       <Typography sx={benefitsSectionStyle.tagline}>
         KEY CAPABILITIES
       </Typography>
       <Typography sx={benefitsSectionStyle.title}>
         {benefitsContent.content.title}
       </Typography>
       {benefitsContent.content.subtitle && (
         <Typography sx={benefitsSectionStyle.subtitle}>
           {benefitsContent.content.subtitle}
         </Typography>
       )}
     </Box>

     <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
       {benefitsContent.content.benefits?.map((benefit, index) => (
         <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
           <Box sx={benefitsSectionStyle.card}>
             <Box sx={benefitsSectionStyle.iconContainer}>
               {iconMap[benefit.muiIcon] || <CheckCircleIcon sx={benefitsSectionStyle.icon} />}
             </Box>
             <Typography sx={benefitsSectionStyle.cardTitle}>
               {benefit.title}
             </Typography>
             <Typography sx={benefitsSectionStyle.cardDescription}>
               {benefit.description}
             </Typography>
           </Box>
         </Grid>
       ))}
     </Grid>
   </Box>
 );
};

export default BenefitsSection;