'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { primaryFrameworks, secondaryFrameworks } from '../../../../../constants/complianceData';
import styles from '../styles/complianceStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ComplianceMenuProps {
	onClose?: () => void;
}

const ComplianceMenu: React.FC<ComplianceMenuProps> = ({ onClose }) => {
	const router = useRouter();
	const pathname = usePathname();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [expandedPanels, setExpandedPanels] = useState<string[]>(['primary']);
	const [activeCategory, setActiveCategory] = useState<'primary' | 'secondary'>('primary');

	// Display frameworks (9 for each category)
	const displayPrimaryFrameworks = primaryFrameworks.slice(0, 8);
	const displaySecondaryFrameworks = secondaryFrameworks.slice(0, 9);

	const handlePanelToggle = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		if (isExpanded) {
			setExpandedPanels([...expandedPanels, panel]);
		} else {
			setExpandedPanels(expandedPanels.filter((p) => p !== panel));
		}
	};

	const isPanelExpanded = (panel: string) => expandedPanels.includes(panel);

	const handleNavigate = (url: string) => {
		router.push(url);
		if (onClose) onClose();
	};

	const isActive = (url: string) => {
		return pathname === url;
	};

	const switchCategory = (category: 'primary' | 'secondary') => {
		setActiveCategory(category);
	};

	const viewAllFrameworks = () => {
		router.push('/compliance');
		if (onClose) onClose();
	};

	const renderMobileLayout = () => {
		return (
			<Box sx={styles.mobileContainer}>
				<Accordion
					expanded={isPanelExpanded('primary')}
					onChange={handlePanelToggle('primary')}
					elevation={0}
					sx={{
						border: 'none',
						'&:before': { display: 'none' },
						backgroundColor: 'transparent',
						color: '#f9fafb',
						marginTop: '0',
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: '#f9fafb' }} />}
						sx={{
							padding: '0.5rem 0',
							borderBottom: '1px solid #262626',
							minHeight: '48px',
						}}
					>
						<Typography sx={{ fontWeight: 600, color: '#f9fafb' }}>PRIMARY FRAMEWORKS</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ padding: '0.5rem 0' }}>
						<Grid container spacing={2}>
							{displayPrimaryFrameworks.map((item, index) => (
								<Grid size ={{xs:12}} key={index}>
									<Box
										sx={{
											...styles.complianceItem,
											...(isActive(item.url) ? styles.activeComplianceItem : {})
										}}
										onClick={() => handleNavigate(item.url)}
									>
										<Box sx={styles.iconContainer}>
											<Image
												src={item.logo}
												alt={item.title}
												width={32}
												height={32}
												style={{
													maxWidth: '100%',
													height: 'auto',
													filter: 'brightness(0) invert(1)'
												}}
											/>
										</Box>
										<Box>
											<Typography sx={styles.itemTitle}>{item.title}</Typography>
											<Typography sx={styles.itemDescription}>{item.description}</Typography>
										</Box>
									</Box>
								</Grid>
							))}
							<Grid size ={{xs:12}}>
								<Box
									sx={styles.viewAllItem}
									onClick={viewAllFrameworks}
								>
									<Box sx={styles.viewAllIconContainer}>
										<ArrowForwardIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
									</Box>
									<Box>
										<Typography sx={styles.viewAllTitle}>View full primary pages</Typography>
										<Typography sx={styles.viewAllDescription}>See all our available compliance frameworks</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>

				<Accordion
					expanded={isPanelExpanded('secondary')}
					onChange={handlePanelToggle('secondary')}
					elevation={0}
					sx={{
						border: 'none',
						'&:before': { display: 'none' },
						backgroundColor: 'transparent',
						color: '#f9fafb',
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon sx={{ color: '#f9fafb' }} />}
						sx={{
							padding: '0.5rem 0',
							borderBottom: '1px solid #262626',
							minHeight: '48px',
						}}
					>
						<Typography sx={{ fontWeight: 600, color: '#f9fafb' }}>SECONDARY FRAMEWORKS</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ padding: '0.5rem 0' }}>
						<Grid container spacing={2}>
							{displaySecondaryFrameworks.map((item, index) => (
								<Grid size ={{xs:12}} key={index}>
									<Box
										sx={{
											...styles.complianceItem,
											...(isActive(item.url) ? styles.activeComplianceItem : {})
										}}
										onClick={() => handleNavigate(item.url)}
									>
										<Box sx={styles.iconContainer}>
											<Image
												src={item.logo}
												alt={item.title}
												width={32}
												height={32}
												style={{
													maxWidth: '100%',
													height: 'auto',
													filter: 'brightness(0) invert(1)'
												}}
											/>
										</Box>
										<Box>
											<Typography sx={styles.itemTitle}>{item.title}</Typography>
											<Typography sx={styles.itemDescription}>{item.description}</Typography>
										</Box>
									</Box>
								</Grid>
							))}
							<Grid size ={{xs:12}}>
								<Box
									sx={styles.viewAllItem}
									onClick={viewAllFrameworks}
								>
									<Box sx={styles.viewAllIconContainer}>
										<ArrowForwardIcon sx={{ color: 'white', fontSize: '1.5rem' }} />
									</Box>
									<Box>
										<Typography sx={styles.viewAllTitle}>View full secondary pages</Typography>
										<Typography sx={styles.viewAllDescription}>See all our available compliance frameworks</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Box>
		);
	};

	const renderDesktopLayout = () => {
		const frameworks = activeCategory === 'primary' ? displayPrimaryFrameworks : displaySecondaryFrameworks;

		return (
			<Box sx={styles.container}>
				<Box sx={styles.sidebar}>
					<Typography sx={styles.sidebarHeader}>FRAMEWORKS</Typography>

					<Box
						sx={{
							...styles.categoryOption,
							...(activeCategory === 'primary' ? styles.activeCategoryOption : {})
						}}
						onClick={() => switchCategory('primary')}
					>
						<Typography sx={styles.categoryOptionText}>Primary Frameworks</Typography>
					</Box>

					<Box
						sx={{
							...styles.categoryOption,
							...(activeCategory === 'secondary' ? styles.activeCategoryOption : {})
						}}
						onClick={() => switchCategory('secondary')}
					>
						<Typography sx={styles.categoryOptionText}>Secondary Frameworks</Typography>
					</Box>
				</Box>

				<Box sx={styles.mainContent}>
					<Typography sx={styles.sectionTitle}>
						{activeCategory === 'primary' ? 'PRIMARY FRAMEWORKS' : 'SECONDARY FRAMEWORKS'}
					</Typography>

					<Grid container spacing={3}>
						{frameworks.slice(0, 8).map((item, index) => (
							<Grid size ={{xs:12,md:6}} key={index}>
								<Box
									sx={styles.featureItem}
									onClick={() => handleNavigate(item.url)}
								>
									<Box sx={styles.featureIcon}>
										<Image
											src={item.logo}
											alt={item.title}
											width={32}
											height={32}
											style={{
												maxWidth: '100%',
												height: 'auto',
												filter: 'brightness(0) invert(1)'
											}}
										/>
									</Box>
									<Box sx={styles.featureContent}>
										<Typography sx={styles.featureTitle}>{item.title}</Typography>
										<Typography sx={styles.featureDescription}>{item.description}</Typography>
									</Box>
								</Box>
							</Grid>
						))}

						{frameworks.length > 8 && (
							<Grid size ={{xs:12,md:6}}>
								<Box
									sx={styles.featureItem}
									onClick={() => handleNavigate(frameworks[8].url)}
								>
									<Box sx={styles.featureIcon}>
										<Image
											src={frameworks[8].logo}
											alt={frameworks[8].title}
											width={32}
											height={32}
											style={{
												maxWidth: '100%',
												height: 'auto',
												filter: 'brightness(0) invert(1)'
											}}
										/>
									</Box>
									<Box sx={styles.featureContent}>
										<Typography sx={styles.featureTitle}>{frameworks[8].title}</Typography>
										<Typography sx={styles.featureDescription}>{frameworks[8].description}</Typography>
									</Box>
								</Box>
							</Grid>
						)}

						{/* View All Button */}
						<Grid size ={{xs:12gi}}>
							<Box sx={styles.viewFullButtonContainer} onClick={viewAllFrameworks}>
								<Box sx={styles.viewButtonIcon}>
									<ArrowForwardIcon sx={{ color: 'white', fontSize: '1.25rem' }} />
								</Box>
								<Box>
									<Typography sx={styles.viewButtonText}>
										View full {activeCategory} pages
									</Typography>
									<Typography sx={styles.viewButtonSubText}>
										See all our available compliance frameworks
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		);
	};

	return isMobile ? renderMobileLayout() : renderDesktopLayout();
};

export default ComplianceMenu;