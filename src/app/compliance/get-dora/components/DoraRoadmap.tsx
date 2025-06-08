"use client";
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { complianceData } from '../constants/doraData';
import DoraRoadmapStyle from '../styles/doraRoadmapStyle';

export default function DoraRoadmap() {
 const roadmapSection = complianceData.sections.find(
   (section) => section.heading === 'Our 3-Step Compliance Roadmap'
 );

 if (!roadmapSection) return null;

 return (
   <Box sx={DoraRoadmapStyle.container}>
     <Box sx={DoraRoadmapStyle.innerBox}>
       <Typography variant="h4" sx={DoraRoadmapStyle.heading}>
         {roadmapSection.heading}
       </Typography>

       <Grid container spacing={{ xs: 2, md: 2 }} sx={DoraRoadmapStyle.gridContainer}>
         {roadmapSection.steps?.map((step, index) => (
           <Grid size={{ xs: 12, sm: 4 }} key={index}>
             <Card sx={DoraRoadmapStyle.card}>
               <CardContent>
                 <Typography variant="h6" sx={DoraRoadmapStyle.cardTitle}>
                   Step {step.stepNumber}: {step.title}
                 </Typography>
                 <Typography variant="body2" sx={DoraRoadmapStyle.cardDescription}>
                   {step.description}
                 </Typography>
               </CardContent>
             </Card>
           </Grid>
         ))}
       </Grid>
     </Box>
   </Box>
 );
}