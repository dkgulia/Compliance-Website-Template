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
import AddIcon from '@mui/icons-material/Add';
import createFaqSectionStyle from '../styles/faqSectionStyle';
import { cspmData } from '../constants/cspmData';

const FAQSection: React.FC = () => {
    const theme = useTheme();
    const styles = createFaqSectionStyle(theme);
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography variant="h2" sx={styles.title}>
                        {cspmData.faq.title}
                    </Typography>
                    <Typography variant="body1" sx={styles.subtitle}>
                        {cspmData.faq.subtitle}
                    </Typography>
                </Box>
                
                <Box sx={styles.accordionContainer}>
                    {cspmData.faq.questions.map((faq, index) => (
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
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={styles.accordionSummary}
                            >
                                <Typography sx={styles.question}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={styles.accordionDetails}>
                                <Typography sx={styles.answer}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;