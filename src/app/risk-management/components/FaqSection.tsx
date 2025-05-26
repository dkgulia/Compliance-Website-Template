'use client';
import React from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import faqSectionStyle from '../styles/faqSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';

interface FaqQuestion {
    question: string;
    answer: string;
}

interface FaqContent {
    title: string;
    subtitle?: string;
    questions: FaqQuestion[];
}

const FaqSection: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const faqContent = riskManagementData.sections.find(
        (section) => section.Sno === '7' && section.blockType === 'FAQ'
    );

    if (!faqContent || !faqContent.content) return null;

    const questions: FaqQuestion[] = faqContent.content.questions || [];

    if (questions.length === 0) {
        return (
            <Box component="section" sx={faqSectionStyle.section}>
                <Container sx={faqSectionStyle.container}>
                    <Box sx={faqSectionStyle.header}>
                        <Typography variant="h2" sx={faqSectionStyle.title}>
                            {faqContent.content.title || "Frequently asked questions"}
                        </Typography>
                        <Typography variant="body1" sx={faqSectionStyle.subtitle}>
                            No frequently asked questions available at this time.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        );
    }

    return (
        <Box component="section" sx={faqSectionStyle.section}>
            <Container sx={faqSectionStyle.container}>
                <Box sx={faqSectionStyle.header}>
                    <Typography variant="h2" sx={faqSectionStyle.title}>
                        {faqContent.content.title || "FAQs"}
                    </Typography>

                    {faqContent.content.subtitle && (
                        <Typography variant="body1" sx={faqSectionStyle.subtitle}>
                            {faqContent.content.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={faqSectionStyle.accordionContainer}>
                    {questions.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
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
            </Container>
        </Box>
    );
};

export default FaqSection;