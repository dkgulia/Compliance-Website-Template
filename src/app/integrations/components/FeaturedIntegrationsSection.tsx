'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import featuredIntegrationsStyle from '../styles/featuredIntegrationsStyle';
import integrationsData from '../constants/integrationsData';

const FeaturedIntegrationsSection: React.FC = () => {
    const theme = useTheme();
    const styles = featuredIntegrationsStyle(theme);
    const { featured } = integrationsData;
    
    const [activeCategory, setActiveCategory] = useState<string>('All');
    
    // Get unique categories from integrations
    const categories = ['All', ...new Set(featured.integrations.map(int => int.category))];
    
    // Filter integrations by active category
    const filteredIntegrations = activeCategory === 'All' 
        ? featured.integrations 
        : featured.integrations.filter(int => int.category === activeCategory);

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Box sx={styles.header}>
                    <Typography variant="h2" sx={styles.title}>
                        {featured.title}
                    </Typography>
                    
                    <Typography sx={styles.description}>
                        {featured.description}
                    </Typography>
                </Box>

                <Box sx={styles.integrationButtons}>
                    {categories.map((category, index) => (
                        <Button 
                            key={index}
                            variant="outlined"
                            sx={styles.filterButton}
                            className={activeCategory === category ? 'active' : ''}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                <Box sx={styles.integrationsGrid}>
                    {filteredIntegrations.map((integration, index) => (
                        <Box key={index} sx={styles.integrationCard}>
                            {integration.isNew && (
                                <Box sx={styles.newBadge}>New</Box>
                            )}
                            
                            {integration.comingSoon && (
                                <Box sx={styles.comingSoonBadge}>Coming Soon</Box>
                            )}
                            
                            <Box sx={styles.logoContainer}>
                                <Box sx={styles.logoPlaceholder}>
                                    {integration.name.charAt(0)}
                                </Box>
                            </Box>
                            
                            <Typography sx={styles.integrationName}>
                                {integration.name}
                            </Typography>
                            
                            <Typography sx={styles.integrationDescription}>
                                {integration.description}
                            </Typography>
                            
                            <Box sx={styles.categoryChip}>
                                {integration.category}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturedIntegrationsSection;