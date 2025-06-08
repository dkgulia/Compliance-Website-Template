'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { iso27018Features } from '../constants/iso27018Data';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import theme from '../../../../theme';

const Iso27018FeaturesSection = () => {
 return (
   <Box id="iso27018-features" sx={featuresSectionStyle.box}>
     <Container sx={featuresSectionStyle.container}>
       <Box sx={featuresSectionStyle.containerBox}>
         <Typography component="h2" variant="h4" sx={featuresSectionStyle.heading}>
           Key ISO 27018 Features
         </Typography>
       </Box>

       <Grid container spacing={{ xs: 2, sm: 3 }} mt={2}>
         {iso27018Features.map((feature) => {
           const IconComp = feature.icon;
           return (
             <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.id}>
               <Card variant="outlined" sx={featuresSectionStyle.card}>
                 <CardContent sx={{ padding: 0}}>
                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: { xs: '0.rem', sm: '0.5rem' } }}>
                     <Box sx={featuresSectionStyle.iconContainer}>
                       <IconComp sx={{ color: '#fff', fontSize: { xs: '22px', sm: '20px',md:'25px'} }} />
                     </Box>
                     <Typography variant="h6" sx={featuresSectionStyle.typography.title}>
                       {feature.title}
                     </Typography>
                     <Typography variant="body2" sx={featuresSectionStyle.typography.body}>
                       {feature.description}
                     </Typography>
                   </Box>
                 </CardContent>
               </Card>
             </Grid>
           );
         })}
       </Grid>
     </Container>
   </Box>
 );
};

export default Iso27018FeaturesSection;