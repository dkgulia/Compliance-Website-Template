'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Button from '../../Button/HexaFortButton';
import conclusionStyle from '../styles/conclusionStyle';
import integrationsData from '../constants/integrationsData';
import { useRouter } from 'next/navigation';

const ConclusionSection: React.FC = () => {
   const { conclusion } = integrationsData;
   const router = useRouter();

   const highlightClosingLine = (text: string) => {
       if (text.includes("Smarter security starts with better connections")) {
           const parts = text.split("Smarter security starts with better connections");

           return (
               <>
                   {parts[0]}
                   <Box component="span" sx={conclusionStyle.highlightText}>
                       Smarter security starts with better connections
                   </Box>
                   {parts[1]}
               </>
           );
       }

       return text;
   };

   return (
       <Box sx={conclusionStyle.section}>
           <Box sx={conclusionStyle.headerContainer}>
            
               <Typography sx={conclusionStyle.title}>
                   {conclusion.title}
               </Typography>

               {conclusion.description.map((paragraph, index) => (
                   <Typography key={index} sx={conclusionStyle.description}>
                       {highlightClosingLine(paragraph)}
                   </Typography>
               ))}

               <Button
                   startIcon={<LockIcon />}
                   onClick={() => router.push('/get-a-demo')}
                   sx={conclusionStyle.button}
               >
                   Connect Your Systems Today
               </Button>
           </Box>
       </Box>
   );
};

export default ConclusionSection;