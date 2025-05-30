'use client';
import React from 'react';
import {
   Box,
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import faqSectionStyle from '../styles/faqSectionStyle';
import { cspmData } from '../constants/cspmData';

const FAQSection: React.FC = () => {
   const [expanded, setExpanded] = React.useState<string | false>(false);

   const handleChange =
       (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
           setExpanded(isExpanded ? panel : false);
       };

   return (
       <Box sx={faqSectionStyle.section}>
           <Box sx={faqSectionStyle.headerContainer}>
               <Typography sx={faqSectionStyle.title}>
                   {cspmData.faq.title}
               </Typography>
               <Typography sx={faqSectionStyle.subtitle}>
                   {cspmData.faq.subtitle}
               </Typography>
           </Box>

           <Box sx={faqSectionStyle.accordionContainer}>
               {cspmData.faq.questions.map((faq, index) => (
                   <Accordion
                       key={index}
                       expanded={expanded === `panel${index}`}
                       onChange={handleChange(`panel${index}`)}
                       sx={faqSectionStyle.accordion}
                       disableGutters
                       elevation={0}
                   >
                       <AccordionSummary
                           expandIcon={<AddIcon sx={faqSectionStyle.expandIcon} />}
                           aria-controls={`panel${index}-content`}
                           id={`panel${index}-header`}
                           sx={faqSectionStyle.accordionSummary}
                       >
                           <Typography sx={faqSectionStyle.questionTypography}>
                               {faq.question}
                           </Typography>
                       </AccordionSummary>
                       <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                           <Typography sx={faqSectionStyle.answerTypography}>
                               {faq.answer}
                           </Typography>
                       </AccordionDetails>
                   </Accordion>
               ))}
           </Box>
       </Box>
   );
};

export default FAQSection;