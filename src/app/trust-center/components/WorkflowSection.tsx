'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import theme from '../../../theme';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import styles from '../styles/workflowSectionStyle'
const WorkflowSection: React.FC = () => {
 const data = trustCenterPageData.sections.workflow;

 return (
   <Box sx={styles.section}>
     <Box sx={styles.headerContainer}>
       <Typography sx={styles.title}>
         {data.title}
       </Typography>
       <Typography sx={styles.subtitle}>
         {data.subtitle}
       </Typography>
     </Box>

     <Box sx={styles.gridContainer}>
       <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
         {data.steps.map((step, index) => {
           const IconComponent = step.icon;
           return (
             <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
               <Box sx={styles.card}>
                 <Box sx={styles.iconContainer}>
                   <IconComponent sx={styles.icon} />
                 </Box>
                 <Typography sx={styles.cardTitle}>
                   {step.heading}
                 </Typography>
                 <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                   <Typography sx={styles.cardDescription}>
                     {step.description}
                   </Typography>
                 </Box>
               </Box>
             </Grid>
           );
         })}
       </Grid>
     </Box>
   </Box>
 );
};

export default WorkflowSection;