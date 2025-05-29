'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
   Tune as TuneIcon,
   Security as SecurityIcon,
   Insights as InsightsIcon,
   CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import keyCapabilitiesStyle from '../styles/keyCapabilitiesStyle';
import { riskManagementData } from '../constants/riskManagementData';

interface Benefit {
   title: string;
   muiIcon: string;
   description: string;
}

const KeyCapabilitiesLadder: React.FC = () => {
   const benefitsContent = riskManagementData.sections.find(
   	(section) => section.Sno === '2' && section.blockType === 'Benefits'
   );

   if (!benefitsContent || !benefitsContent.content) return null;

   const capabilities: Benefit[] = benefitsContent.content.benefits || [];

   const iconMap: Record<string, React.ComponentType<any>> = {
   	Tune: TuneIcon,
   	Security: SecurityIcon,
   	Insights: InsightsIcon,
   	CheckCircle: CheckCircleIcon,
   };

   if (capabilities.length === 0) {
   	return (
   		<Box sx={keyCapabilitiesStyle.section}>
   			<Box sx={keyCapabilitiesStyle.headerContainer}>
   				<Typography sx={keyCapabilitiesStyle.tagline}>
   					KEY CAPABILITIES
   				</Typography>
   				<Typography sx={keyCapabilitiesStyle.title}>
   					No capabilities found
   				</Typography>
   			</Box>
   		</Box>
   	);
   }

   return (
   	<Box sx={keyCapabilitiesStyle.section}>
   		<Box sx={keyCapabilitiesStyle.headerContainer}>

   			<Typography sx={keyCapabilitiesStyle.title}>
   				{benefitsContent.content.title || 'Key Capabilities'}
   			</Typography>
   			<Typography sx={keyCapabilitiesStyle.subtitle}>
   				{benefitsContent.content.subtitle || 'Powerful features that give you complete control over your risk landscape'}
   			</Typography>
   		</Box>

   		<Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
   			{capabilities.map((item, index) => {
   				const IconComp = iconMap[item.muiIcon] || CheckCircleIcon;
   				return (
   					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
   						<Box sx={keyCapabilitiesStyle.card}>
   							<Box sx={keyCapabilitiesStyle.iconContainer}>
   								<IconComp sx={keyCapabilitiesStyle.icon} />
   							</Box>
   							<Typography sx={keyCapabilitiesStyle.cardTitle}>
   								{item.title}
   							</Typography>
   							<Typography sx={keyCapabilitiesStyle.cardDescription}>
   								{item.description}
   							</Typography>
   						</Box>
   					</Grid>
   				);
   			})}
   		</Grid>
   	</Box>
   );
};

export default KeyCapabilitiesLadder;