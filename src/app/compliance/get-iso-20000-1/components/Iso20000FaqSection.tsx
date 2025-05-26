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
import iso20000FaqStyles from '../styles/faqSectionStyle';
import {iso20000Data} from '../constants/iso20000Data';

const Iso20000FaqSection: React.FC = () => {
  const faqSection = iso20000Data.sections.find(
    (section) => section.blockType === 'FAQ'
  )?.content;

  if (!faqSection) return null;

  return (
    <Box sx={iso20000FaqStyles.box}>
      <Box sx={iso20000FaqStyles.section}>
        <Typography component="h2" variant="h4" sx={iso20000FaqStyles.title}>
          {faqSection.title}
        </Typography>

        {faqSection.subtitle && (
          <Typography variant="subtitle1" sx={iso20000FaqStyles.subtitle}>
            {faqSection.subtitle}
          </Typography>
        )}

        <Box sx={iso20000FaqStyles.accordionContainer}>
          {faqSection.questions?.map((item: any, index: number) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={iso20000FaqStyles.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={iso20000FaqStyles.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={iso20000FaqStyles.accordionSummary}
              >
                <Typography sx={iso20000FaqStyles.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={iso20000FaqStyles.accordionDetails}>
                <Typography sx={iso20000FaqStyles.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Iso20000FaqSection;