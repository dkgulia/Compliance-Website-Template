/* <ai_context>
   FAQ section for the new ISO 27001 page
   Updated: remove the image placeholder and apply PCI DSS styling
</ai_context> */

"use client";
import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import faqSectionStyle from "../styles/faqSectionStyle";
import { iso27001Data } from "../constants/iso27001Data";

const Iso27001FaqSection: React.FC = () => {
  const faqSection = iso27001Data.sections.find(
    (sec) => sec.Sno === "10" && sec.blockType === "FAQ"
  );

  if (!faqSection) return null;

  return (
    <Box sx={faqSectionStyle.box}>
      <Box sx={faqSectionStyle.section}>
        <Typography component="h2" variant="h4" sx={faqSectionStyle.title}>
          {faqSection.content.title}
        </Typography>

        <Typography variant="subtitle1" sx={faqSectionStyle.subtitle}>
          {faqSection.content.subtitle || "Your Questions, Our Commitment"}
        </Typography>

        <Box sx={faqSectionStyle.accordionContainer}>
          {faqSection.content.questions &&
            faqSection.content.questions.map((item: any, index: number) => (
              <Accordion
                key={index}
                disableGutters
                elevation={0}
                sx={faqSectionStyle.accordion}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={faqSectionStyle.expandIcon} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
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
    </Box>
  );
};

export default Iso27001FaqSection;