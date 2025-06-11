'use client';
import React, { useState } from 'react';
import {
 Box,
 Typography,
 Accordion,
 AccordionSummary,
 AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { faqData } from '../constant/faqData';
import faqSectionStyle from '../styles/faqSectionStyle';

const FAQSection: React.FC = () => {
 const [expanded, setExpanded] = useState<string | false>(false);

 const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
   setExpanded(isExpanded ? panel : false);
 };

 return (
   <Box sx={faqSectionStyle.section}>
     <Box sx={faqSectionStyle.headerContainer}>
     
       <Typography sx={faqSectionStyle.title}>
         Frequently Asked Questions
       </Typography>
       <Typography sx={faqSectionStyle.subtitle}>
         Your Questions, Our Commitment
       </Typography>
     </Box>

     {faqData.categories.map((category, categoryIndex) => (
       <Box key={`category-${categoryIndex}`} sx={faqSectionStyle.categoryContainer}>
         <Typography sx={faqSectionStyle.categoryTitle}>
           {category.name}
         </Typography>

         <Box sx={faqSectionStyle.accordionContainer}>
           {category.questions.map((item, index) => (
             <Accordion
               key={`faq-${categoryIndex}-${index}`}
               expanded={expanded === `panel-${categoryIndex}-${index}`}
               onChange={handleChange(`panel-${categoryIndex}-${index}`)}
               disableGutters
               elevation={0}
               sx={faqSectionStyle.accordion}
             >
               <AccordionSummary
                 expandIcon={<AddIcon sx={faqSectionStyle.expandIcon} />}
                 aria-controls={`panel-${categoryIndex}-${index}-content`}
                 id={`panel-${categoryIndex}-${index}-header`}
                 sx={faqSectionStyle.accordionSummary}
               >
                 <Typography sx={faqSectionStyle.questionTypography}>{item.question}</Typography>
               </AccordionSummary>

               <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                 <Typography sx={faqSectionStyle.answerTypography}>{item.answer}</Typography>
               </AccordionDetails>
             </Accordion>
           ))}
         </Box>
       </Box>
     ))}
   </Box>
 );
};

export default FAQSection;