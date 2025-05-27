'use client';
import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import createHowHexafortHelpsStyle from '../styles/howHexafortHelpsStyle';
import dpdpData from '../constants/dpdpData';

const DpdpHowHexafortHelps: React.FC = () => {
 const theme = useTheme();
 const styles = createHowHexafortHelpsStyle(theme);
 const { howHexafortHelps } = dpdpData.sections;

 return (
   <Box component="section" sx={styles.section}>
     <Container sx={styles.container}>
       <Box sx={styles.header}>
         <Typography variant="h2" sx={styles.title}>
           {howHexafortHelps.title || "How Hexafort Helps You Achieve DPDP Compliance"}
         </Typography>
         <Typography variant="body1" sx={styles.subtitle}>
           {howHexafortHelps.subtitle || "Our structured approach streamlines complex DPDP mandates, ensuring personal data protection."}
         </Typography>
       </Box>

       <Grid container spacing={{ xs: 2, sm: 3 }}>
         {howHexafortHelps.steps.map((step, index) => {
           const Icon = step.icon;
           return (
             <Grid size={{xs:12,sm:6,md:3}} key={index}>
               <Box sx={styles.stepCard}>
                 <Box sx={styles.iconContainer}>
                   <Icon sx={styles.stepIcon} />
                 </Box>
                 <Typography sx={styles.stepText}>
                   {step.text}
                 </Typography>
               </Box>
             </Grid>
           );
         })}
       </Grid>
     </Container>
   </Box>
 );
};

export default DpdpHowHexafortHelps;