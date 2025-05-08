'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import categoriesStyle from '../styles/categoriesStyle';
import integrationsData from '../constants/integrationsData';

const CategoriesSection: React.FC = () => {
    const { categories } = integrationsData;

    return (
        <Box component="section" sx={categoriesStyle.section}>
            <Container sx={categoriesStyle.container}>
                <Typography variant="h2" sx={categoriesStyle.title} gutterBottom>
                    Integration Categories
                </Typography>

                <Box sx={categoriesStyle.categoriesGrid}>
                    {categories.map((category, index) => {
                        const CategoryIcon = category.icon;

                        return (
                            <Box key={index} sx={categoriesStyle.categoryCard}>
                                <Box sx={categoriesStyle.iconContainer}>
                                    <CategoryIcon sx={categoriesStyle.categoryIcon} />
                                </Box>

                                <Box sx={categoriesStyle.categoryContent}>
                                    <Typography sx={categoriesStyle.categoryTitle}>
                                        {category.title}
                                    </Typography>

                                    <Typography sx={categoriesStyle.categoryDescription}>
                                        {category.description}
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

export default CategoriesSection;