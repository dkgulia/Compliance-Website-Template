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
import styles from '../styles/faqSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';

const FaqSection: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const data = trustCenterPageData.sections.faq;

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

        return (
            <Box sx={styles.section}>
                <Box sx={styles.headerContainer}>
                    <Typography sx={styles.tagline}>
                        {data.tagline}
                    </Typography>
                    <Typography sx={styles.title}>
                        {data.title}
                    </Typography>
                    <Typography sx={styles.subtitle}>
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
            </Box>
        );
     };

     export default FaqSection;