'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import categoriesStyle from '../styles/categoriesStyle';
import integrationsData from '../constants/integrationsData';

const CategoriesSection: React.FC = () => {
    const theme = useTheme();
    const styles = categoriesStyle(theme);
    const { categories } = integrationsData;

    return (
        <Box component="section" sx={styles.section}>
            <Container sx={styles.container}>
                <Typography variant="h2" sx={styles.title} gutterBottom>
                    Integration Categories
                </Typography>

                <Box sx={styles.categoriesGrid}>
                    {categories.map((category, index) => {
                        const CategoryIcon = category.icon;
                        
                        return (
                            <Box key={index} sx={styles.categoryCard}>
                                <Box sx={styles.iconContainer}>
                                    <CategoryIcon sx={styles.categoryIcon} />
                                </Box>
                                
                                <Box sx={styles.categoryContent}>
                                    <Typography sx={styles.categoryTitle}>
                                        {category.title}
                                    </Typography>
                                    
                                    <Typography sx={styles.categoryDescription}>
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