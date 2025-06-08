'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

import doraHowWeHelpStyle from '../styles/doraHowWeHelpStyle';
import PolicyIcon from '@mui/icons-material/Policy';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UpdateIcon from '@mui/icons-material/Update';

const helpSteps = [
 {
   icon: PolicyIcon,
   title: 'Risk Profiling',
   description: 'Pinpoint your ICT vulnerabilities and tailor a plan aligning with DORA guidelines.',
   color: '#115e59',
 },
 {
   icon: SecurityIcon,
   title: 'Implementation & Security Controls',
   description: 'Deploy robust security solutions that meet DORA baseline for digital resilience.',
   color: '#115e59',
 },
 {
   icon: AssessmentIcon,
   title: 'Continuous Testing',
   description: 'Identify weaknesses early through routine assessments and advanced penetration tests.',
   color: '#115e59',
 },
 {
   icon: BuildIcon,
   title: 'Incident Response Setup',
   description: 'Streamlined workflows to classify and report ICT incidents within tight DORA timelines.',
   color: '#115e59',
 },
 {
   icon: CheckCircleIcon,
   title: 'Ongoing Maintenance',
   description: 'Monitor compliance posture and refine controls as DORA guidelines evolve beyond 2025.',
   color: '#115e59',
 },
 {
   icon: UpdateIcon,
   title: 'Time Optimization',
   description: 'Accelerate processes with streamlined workflows, ensuring timely adherence to DORA mandates.',
   color: '#115e59',
 },
];

export default function DoraHowWeHelp() {
 return (
   <Box sx={doraHowWeHelpStyle.container}>
     <Container sx={doraHowWeHelpStyle.innerContainer}>
       <Typography variant="h4" sx={doraHowWeHelpStyle.title}>
         How Hexafort Can Help with DORA Implementation
       </Typography>
       <Typography variant="body1" sx={doraHowWeHelpStyle.subtitle}>
         From risk assessments to full-scale incident response, Hexafort has you covered for all aspects of DORA
         compliance and beyond.
       </Typography>

       <Grid container spacing={{ xs: 2, md: 2 }} sx={doraHowWeHelpStyle.grid} justifyContent={'space-around'}>
         {helpSteps.map((step, index) => (
           <Grid key={index} size={{ xs: 12, sm: 6}}>
             <Card sx={doraHowWeHelpStyle.card}>
               <CardContent sx={doraHowWeHelpStyle.cardContent}>
                 <Grid container spacing={1} alignItems="flex-start" direction={'row'}>
                   <Grid size={{ xs: 2, md: 2 }}>
                     <Box
                       sx={{
                         fontSize: { xs: '2.5rem', md: '3.5rem' },
                         color: step.color,
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         marginTop:'0.1rem'
                       }}
                     >
                       <step.icon fontSize="inherit" />
                     </Box>
                   </Grid>
                   <Grid size={{ xs: 10, md: 10 }}>
                     <Box sx={doraHowWeHelpStyle.cardContainer}>
                       <Typography variant="h6" sx={doraHowWeHelpStyle.cardTitle}>
                         {step.title}
                       </Typography>
                       <Typography sx={doraHowWeHelpStyle.cardDescription}>
                         {step.description}
                       </Typography>
                     </Box>
                   </Grid>
                 </Grid>
               </CardContent>
             </Card>
           </Grid>
         ))}
       </Grid>
     </Container>
   </Box>
 );
}