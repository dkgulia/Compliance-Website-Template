'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/ComplianceHubButton';
import supportedFrameworksStyle from '../styles/simpleInfoSectionStyle';
import { cspmData } from '../constants/cspmData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import professionalSupportImage from '../images/professionalAssistance.png';

const ProfessionalAssistanceSection: React.FC = () => {
   const router = useRouter();

   const handleGetDemo = () => {
       router.push('/get-a-product-demo');
   };

   return (
       <Box sx={supportedFrameworksStyle.section}>
           <Box sx={supportedFrameworksStyle.headerContainer}>
               <Typography sx={supportedFrameworksStyle.tagline}>EXPERT SUPPORT</Typography>
               <Typography sx={supportedFrameworksStyle.title}>
                   {cspmData.professionalAssistance.title}
               </Typography>
           </Box>

           <Box sx={supportedFrameworksStyle.contentWrapper}>
               <Box sx={supportedFrameworksStyle.textContent}>
                   {cspmData.professionalAssistance.highlightText && (
                       <Box sx={supportedFrameworksStyle.tag}>
                           <Typography sx={supportedFrameworksStyle.tagText}>
                               {cspmData.professionalAssistance.highlightText}
                           </Typography>
                       </Box>
                   )}

                   {cspmData.professionalAssistance.subtitle && (
                       <Typography sx={supportedFrameworksStyle.subtitle}>
                           {cspmData.professionalAssistance.subtitle}
                       </Typography>
                   )}

                   <Typography sx={supportedFrameworksStyle.description}>
                       {cspmData.professionalAssistance.description}
                   </Typography>

                   <Button
                       endIcon={<ArrowForwardIcon />}
                       onClick={handleGetDemo}
                   >
                       Get Expert Support
                   </Button>
               </Box>

               <Box sx={supportedFrameworksStyle.imageContainer}>
                   <Box sx={supportedFrameworksStyle.imageWrapper}>
                       <Image
                           src={professionalSupportImage}
                           alt={cspmData.professionalAssistance.imageIdea || "Professional assistance and support team"}
                           fill
                           style={supportedFrameworksStyle.assistanceImage}
                           priority
                           sizes="(max-width: 600px) 280px, (max-width: 900px) 350px, 400px"
                       />
                   </Box>
               </Box>
           </Box>
       </Box>
   );
};

export default ProfessionalAssistanceSection;