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
import { faq } from '../constants/iso27018Data';
import iso27018FaqStyle from '../styles/iso27018FaqStyle';
import theme from '../../../../theme';

const Iso27018FaqSection: React.FC = () => {
  return (
    <Box sx={iso27018FaqStyle.box}>
      <Box sx={iso27018FaqStyle.section}>
        <Typography component="h2" variant="h4" sx={iso27018FaqStyle.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={iso27018FaqStyle.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        <Box sx={iso27018FaqStyle.accordionContainer}>
          {faq.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={iso27018FaqStyle.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={iso27018FaqStyle.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={iso27018FaqStyle.accordionSummary}
              >
                <Typography sx={iso27018FaqStyle.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={iso27018FaqStyle.accordionDetails}>
                <Typography sx={iso27018FaqStyle.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Iso27018FaqSection;