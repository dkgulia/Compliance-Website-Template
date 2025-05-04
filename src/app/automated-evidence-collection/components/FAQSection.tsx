'use client';

import React from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import createFaqSectionStyle from '../styles/faqSectionStyle';
import evidenceCollectionData from '../constants/evidenceCollectionData';

const FAQSection: React.FC = () => {
    const theme = useTheme();
    const styles = createFaqSectionStyle(theme);
    const { faq } = evidenceCollectionData;
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent, 
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.headerBox}>
                    <Typography variant="h2" sx={styles.title}>
                        {faq.title}
                    </Typography>
                    {faq.subtitle && (
                        <Typography variant="body1" sx={styles.subtitle}>
                            {faq.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={styles.faqContainer}>
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
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={styles.accordionSummary}
                            >
                                <Typography sx={styles.question}>
                                    {item.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={styles.accordionDetails}>
                                <Typography sx={styles.answer}>
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

export default FAQSection;