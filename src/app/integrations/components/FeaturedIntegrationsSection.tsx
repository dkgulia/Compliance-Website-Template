'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Button from '../../Button/ComplianceHubButton';
import Image from 'next/image';
import featuredIntegrationsStyle from '../styles/featuredIntegrationsStyle';
import integrationsData from '../constants/integrationsData';

const FeaturedIntegrationsSection: React.FC = () => {
   const { featured } = integrationsData;

   const [activeCategory, setActiveCategory] = useState<string>('All');
   const categories = ['All', ...new Set(featured.integrations.map((int) => int.category))];
   const filteredIntegrations =
   	activeCategory === 'All'
   		? featured.integrations
   		: featured.integrations.filter((int) => int.category === activeCategory);

   return (
   	<Box sx={featuredIntegrationsStyle.section}>
   		<Box sx={featuredIntegrationsStyle.headerContainer}>
   			<Typography sx={featuredIntegrationsStyle.tagline}>
   				FEATURED INTEGRATIONS
   			</Typography>

   			<Typography sx={featuredIntegrationsStyle.title}>
   				{featured.title}
   			</Typography>

   			<Typography sx={featuredIntegrationsStyle.subtitle}>
   				{featured.description}
   			</Typography>
   		</Box>

   		<Box sx={featuredIntegrationsStyle.filterContainer}>
   			{categories.map((category, index) => (
   				<Button
   					key={index}
   					onClick={() => setActiveCategory(category)}
   					sx={featuredIntegrationsStyle.filterButton}
   				>
   					{category}
   				</Button>
   			))}
   		</Box>

   		<Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
   			{filteredIntegrations.map((integration, index) => (
   				<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
   					<Box sx={featuredIntegrationsStyle.card}>
   						{integration.isNew && (
   							<Box sx={featuredIntegrationsStyle.newBadge}>New</Box>
   						)}

   						{integration.comingSoon && (
   							<Box sx={featuredIntegrationsStyle.comingSoonBadge}>Coming Soon</Box>
   						)}

   						<Box sx={featuredIntegrationsStyle.logoContainer}>
   							<Image
   								src={integration.logo}
   								alt={`${integration.name} logo`}
   								width={60}
   								height={60}
   								style={{
   									objectFit: 'contain',
   									maxWidth: '100%',
   									maxHeight: '100%',
   								}}
   							/>
   						</Box>

   						<Typography sx={featuredIntegrationsStyle.cardTitle}>
   							{integration.name}
   						</Typography>

   						<Typography sx={featuredIntegrationsStyle.cardDescription}>
   							{integration.description}
   						</Typography>

   						<Box sx={featuredIntegrationsStyle.categoryChip}>
   							{integration.category}
   						</Box>
   					</Box>
   				</Grid>
   			))}
   		</Grid>
   	</Box>
   );
};

export default FeaturedIntegrationsSection;