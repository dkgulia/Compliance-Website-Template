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
import controlFrameworkData from '../constants/controlFrameworkData';

const FAQSection: React.FC = () => {
   const { faq } = controlFrameworkData.sections;
   const [expanded, setExpanded] = React.useState<string | false>(false);

   const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
       setExpanded(isExpanded ? panel : false);
   };

   return (
       <Box sx={faqSectionStyle.section}>
           <Box sx={faqSectionStyle.headerContainer}>
               <Typography sx={faqSectionStyle.tagline}>FREQUENTLY ASKED</Typography>
               <Typography sx={faqSectionStyle.title}>
                   {faq.title}
               </Typography>
               {faq.subtitle && (
                   <Typography sx={faqSectionStyle.subtitle}>
                       {faq.subtitle}
                   </Typography>
               )}
           </Box>

           <Box sx={faqSectionStyle.accordionContainer}>
               {faq.questions.map((item, index) => (
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
                               {item.question}
                           </Typography>
                       </AccordionSummary>

                       <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                           <Typography sx={faqSectionStyle.answerTypography}>
                               {item.answer}
                           </Typography>
                       </AccordionDetails>
                   </Accordion>
               ))}
           </Box>
       </Box>
   );
};

export default FAQSection;