'use client';
import React from 'react';
import { 
    Box, 
    Typography, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    Container,
    useTheme
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import createFaqSectionStyle from '../styles/faqSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';

const FaqSection: React.FC = () => {
    const theme = useTheme();
    const styles = createFaqSectionStyle(theme);
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    const faqContent = riskManagementData.sections.find(
        (section) => section.Sno === '7' && section.blockType === 'FAQ'
    );

    if (!faqContent) return null;

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography variant="h2" sx={styles.title}>
                        {faqContent.content.title}
                    </Typography>

                    {faqContent.content.subtitle && (
                        <Typography variant="body1" sx={styles.subtitle}>
                            {faqContent.content.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={styles.accordionContainer}>
                    {faqContent.content.questions.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
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

export default FaqSection;