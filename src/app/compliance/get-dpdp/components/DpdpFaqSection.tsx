'use client';
import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import createFaqSectionStyle from '../styles/faqSectionStyle';
import dpdpData from '../constants/dpdpData';

const DpdpFaqSection: React.FC = () => {
  const theme = useTheme();
  const styles = createFaqSectionStyle(theme);
  const { faq } = dpdpData.sections;

  return (
    <Box component="section" sx={styles.box}>
      <Box sx={styles.section}>
        <Typography component="h2" variant="h4" sx={styles.title}>
          {faq.title}
        </Typography>

        <Typography variant="subtitle1" sx={styles.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        <Box sx={styles.accordionContainer}>
          {faq.questions.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={styles.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={styles.accordionSummary}
              >
                <Typography sx={styles.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={styles.accordionDetails}>
                <Typography sx={styles.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DpdpFaqSection;