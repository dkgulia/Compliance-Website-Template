'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import featuredIntegrationsStyle from '../styles/featuredIntegrationsStyle';
import integrationsData from '../constants/integrationsData';

const FeaturedIntegrationsSection: React.FC = () => {
    const { featured } = integrationsData;

    const [activeCategory, setActiveCategory] = useState<string>('All');
    const categories = ['All', ...new Set(featured.integrations.map(int => int.category))];
    const filteredIntegrations = activeCategory === 'All'
        ? featured.integrations
        : featured.integrations.filter(int => int.category === activeCategory);

    return (
        <Box component="section" sx={featuredIntegrationsStyle.section}>
            <Container sx={featuredIntegrationsStyle.container}>
                <Box sx={featuredIntegrationsStyle.header}>
                    <Typography variant="h2" sx={featuredIntegrationsStyle.title}>
                        {featured.title}
                    </Typography>

                    <Typography sx={featuredIntegrationsStyle.description}>
                        {featured.description}
                    </Typography>
                </Box>

                <Box sx={featuredIntegrationsStyle.integrationButtons}>
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            variant="outlined"
                            sx={featuredIntegrationsStyle.filterButton}
                            className={activeCategory === category ? 'active' : ''}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                <Box sx={featuredIntegrationsStyle.integrationsGrid}>
                    {filteredIntegrations.map((integration, index) => (
                        <Box key={index} sx={featuredIntegrationsStyle.integrationCard}>
                            {integration.isNew && (
                                <Box sx={featuredIntegrationsStyle.newBadge}>New</Box>
                            )}

                            {integration.comingSoon && (
                                <Box sx={featuredIntegrationsStyle.comingSoonBadge}>Coming Soon</Box>
                            )}

                            <Box sx={featuredIntegrationsStyle.logoContainer}>
                                <Box sx={featuredIntegrationsStyle.logoPlaceholder}>
                                    {integration.name.charAt(0)}
                                </Box>
                            </Box>

                            <Typography sx={featuredIntegrationsStyle.integrationName}>
                                {integration.name}
                            </Typography>

                            <Typography sx={featuredIntegrationsStyle.integrationDescription}>
                                {integration.description}
                            </Typography>

                            <Box sx={featuredIntegrationsStyle.categoryChip}>
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