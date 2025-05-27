'use client';
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import {iso20000Data} from '../constants/iso20000Data';
import compareStyle from '../styles/compareStyle';
import BalanceIcon from '@mui/icons-material/Balance';
import TuneIcon from '@mui/icons-material/Tune';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const Iso20000CompareWith9001Section: React.FC = () => {
   const compSection = iso20000Data.sections.find(
       (section) => section.blockType === 'Simple Info' && section.Sno === '5'
   )?.content;

   if (!compSection) return null;

   const icons = [
       <BalanceIcon key="balance" sx={compareStyle.icon} />,
       <TuneIcon key="tune" sx={compareStyle.icon} />,
       <IntegrationInstructionsIcon key="integration" sx={compareStyle.icon} />
   ];

   return (
       <Box sx={compareStyle.box}>
           <Container>
               <Box sx={compareStyle.innerBox}>
                   <Typography variant="h3" sx={compareStyle.title}>
                       {compSection.title}
                   </Typography>

                   <Grid container spacing={{ xs: 2, sm: 3 }}>
                       {compSection.steps?.map((step: string, index: number) => (
                           <Grid size={{ xs: 12 }} key={index}>
                               <Box sx={compareStyle.stepCard}>
                                   <Box sx={compareStyle.iconContainer}>
                                       {icons[index] || <BalanceIcon sx={compareStyle.icon} />}
                                   </Box>
                                   <Box sx={compareStyle.textContainer}>
                                       <Typography variant="body1" sx={compareStyle.text}>
                                           {step}
                                       </Typography>
                                   </Box>
                               </Box>
                           </Grid>
                       ))}
                   </Grid>
               </Box>
           </Container>
       </Box>
   );
};

export default Iso20000CompareWith9001Section;