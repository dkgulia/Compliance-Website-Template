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
import { trustCenterPageData } from '../constants/trustCenterPageData';

const FaqSection: React.FC = () => {
    const theme = useTheme();
    const styles = createFaqSectionStyle(theme);
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const data = trustCenterPageData.sections.faq;

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box component="section" sx={styles.box}>
            <Container sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography variant="h2" sx={styles.title}>
                        {data.title}
                    </Typography>

                    <Typography variant="body1" sx={styles.subtitle}>
                        {data.subtitle}
                    </Typography>
                </Box>

                <Box sx={styles.accordionContainer}>
                    {data.questions.map((item, index) => (
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

export default FaqSection;