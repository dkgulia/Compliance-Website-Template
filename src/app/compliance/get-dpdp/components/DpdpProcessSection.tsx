'use client';
import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import createProcessSectionStyle from '../styles/processSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpProcessSection: React.FC = () => {
 const theme = useTheme();
 const styles = createProcessSectionStyle(theme);
 const { process } = dpdpData.sections;

 return (
   <Box component="section" sx={styles.section}>
     <Container maxWidth="lg">
       <Box sx={styles.containerBox}>
         <Typography component="h2" variant="h4" sx={styles.heading}>
           {process.title}
         </Typography>
         {process.subtitle && (
           <Typography variant="body1" sx={styles.subHeading}>
             {process.subtitle}
           </Typography>
         )}
       </Box>

       <Grid container spacing={{ xs: 2, sm: 4 }}>
         {process.items.map((step, index) => (
           <Grid size={{xs:12,sm:6,md:3}}  key={index}>
             <Box sx={styles.stepCard}>
               <Box sx={styles.stepNumberContainer}>
                 <Typography sx={styles.stepNumber}>{index + 1}</Typography>
               </Box>
               <Box sx={styles.textContainer}>
                 <Typography variant="h6" sx={styles.stepTitle}>
                   {step.heading}
                 </Typography>
                 <Typography variant="body2" sx={styles.stepDescription}>
                   {step.description}
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

export default DpdpProcessSection;