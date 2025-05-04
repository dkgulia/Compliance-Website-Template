'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
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
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.header}>
          <Typography variant="h2" sx={styles.title}>
            {faq.title}
          </Typography>
          {faq.subtitle && (
            <Typography variant="body1" sx={styles.subtitle}>
              {faq.subtitle}
            </Typography>
          )}
        </Box>

        <Box sx={styles.accordionContainer}>
          {faq.questions.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={styles.accordion}
              disableGutters
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={styles.expandIcon} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                sx={styles.accordionSummary}
              >
                <Typography sx={styles.question}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={styles.accordionDetails}>
                <Typography sx={styles.answer}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default DpdpFaqSection;