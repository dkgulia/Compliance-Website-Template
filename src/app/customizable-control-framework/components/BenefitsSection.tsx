'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const BenefitsSection: React.FC = () => {
    const theme = useTheme();
    const styles = benefitsSectionStyle(theme);
    const { benefits } = controlFrameworkData.sections;

    // Emoji mapping for benefit items
    const emojiMap = {
        "Complete Flexibility": "🛠️",
        "Framework-Agnostic & Future-Ready": "📋",
        "Tailored for Your Business Needs": "🧩",
        "Built for Collaboration": "🤝",
        "No Complexity. No Coding.": "⏱️"
    };

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.headerBox}>
                    <Typography variant="h2" sx={styles.title}>
                        {benefits.title}
                    </Typography>
                    {benefits.subtitle && (
                        <Typography sx={styles.subtitle}>
                            {benefits.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={styles.benefitsGrid}>
                    {benefits.items.map((benefit, index) => {
                        const BenefitIcon = benefit.icon;
                        const emoji = emojiMap[benefit.title] || "";
                        
                        return (
                            <Box key={index} sx={styles.benefitCard}>
                                <Box sx={styles.contentWrapper}>
                                    <Box sx={styles.iconContainer}>
                                        <BenefitIcon sx={styles.benefitIcon} />
                                    </Box>
                                    
                                    <Typography sx={styles.benefitTitle}>
                                        {emoji && <span sx={styles.emojiPrefix}>{emoji}</span>} {benefit.title}
                                    </Typography>
                                    
                                    <Typography sx={styles.benefitDescription}>
                                        {benefit.description}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default BenefitsSection;