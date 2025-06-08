import React, { useState } from 'react';
import {
	Box,
	Typography,
	Divider,
	useMediaQuery,
	useTheme,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/navigation';
import styles from '../styles/platformStyles';
import { platformFeatures, companySizeOptions, solutionItems } from '../../../constants/platformData';

interface PlatformMenuContentProps {
	onClose?: () => void;
}

const PlatformMenuContent: React.FC<PlatformMenuContentProps> = ({ onClose }) => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [expandedPanels, setExpandedPanels] = useState<string[]>(['features']);

	const handlePanelToggle = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		event.stopPropagation();
		if (isExpanded) {
			setExpandedPanels([...expandedPanels, panel]);
		} else {
			setExpandedPanels(expandedPanels.filter((p) => p !== panel));
		}
	};

	const isPanelExpanded = (panel: string) => expandedPanels.includes(panel);

	const handleNavigate = (href: string) => {
		router.push(href);
		if (onClose) {
			onClose();
		}
	};

	const renderMobileLayout = () => {
		return (
			<Box sx={styles.mobileContainer}>
				<Accordion
					expanded={isPanelExpanded('features')}
					onChange={handlePanelToggle('features')}
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
						<Typography sx={{ fontWeight: 600, color: '#f9fafb' }}>ALL FEATURES</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ padding: '0.5rem 0' }}>
						<Box sx={styles.mobileFeaturesList}>
							{platformFeatures.map((feature, index) => (
								<Box
									key={`mobile-feature-${index}`}
									sx={styles.mobileFeatureItem}
									onClick={() => handleNavigate(feature.href)}
								>
									<Box sx={styles.featureIcon}>{feature.icon}</Box>
									<Box sx={styles.featureContent}>
										<Typography sx={styles.featureTitle}>
											{feature.title}
											{feature.isNew && <span style={styles.newBadge}>New</span>}
										</Typography>
										<Typography sx={styles.featureDescription}>{feature.description}</Typography>
									</Box>
								</Box>
							))}
						</Box>
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={isPanelExpanded('company-size')}
					onChange={handlePanelToggle('company-size')}
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
						<Typography sx={{ fontWeight: 600, color: '#f9fafb' }}>BY COMPANY SIZE</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ padding: '0.5rem 0' }}>
						{companySizeOptions.map((option, index) => (
							<Box
								key={`mobile-size-${index}`}
								sx={styles.mobileSizeOptionContainer}
								onClick={() => handleNavigate(option.href)}
							>
								<Box sx={styles.sizeOptionIcon}>{option.icon}</Box>
								<Box sx={styles.featureContent}>
									<Typography sx={styles.sizeOptionTitle}>{option.title}</Typography>
									<Typography sx={styles.sizeOptionDescription}>{option.description}</Typography>
								</Box>
							</Box>
						))}
					</AccordionDetails>
				</Accordion>
				<Accordion
					expanded={isPanelExpanded('solutions')}
					onChange={handlePanelToggle('solutions')}
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
						<Typography sx={{ fontWeight: 600, color: '#f9fafb' }}>ALL SOLUTIONS</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ padding: '0.5rem 0' }}>
						{solutionItems.map((solution, index) => (
							<Box
								key={`mobile-solution-${index}`}
								sx={styles.mobileSolutionItem}
								onClick={() => handleNavigate(solution.href)}
							>
								<Typography sx={styles.solutionItemText}>{solution.title}</Typography>
							</Box>
						))}
					</AccordionDetails>
				</Accordion>
			</Box>
		);
	};

	const renderDesktopLayout = () => {
		return (
			<Box sx={styles.container}>
				<Box sx={styles.sidebar}>
					<Box sx={styles.sidebarSection}>
						<Typography sx={styles.sidebarHeader}>BY COMPANY SIZE</Typography>

						{companySizeOptions.map((option, index) => (
							<Box
								key={`size-option-${index}`}
								sx={styles.sizeOptionContainer}
								onClick={() => handleNavigate(option.href)}
							>
								<Box sx={styles.sizeOptionIcon}>{option.icon}</Box>
								<Box sx={styles.featureContent}>
									<Typography sx={styles.sizeOptionTitle}>{option.title}</Typography>
									<Typography sx={styles.sizeOptionDescription}>{option.description}</Typography>
								</Box>
							</Box>
						))}
					</Box>
					<Box sx={styles.sidebarSection}>
						<Typography sx={styles.sidebarHeader}>ALL SOLUTIONS</Typography>

						{solutionItems.map((solution, index) => (
							<Box key={`solution-${index}`} sx={styles.solutionItem} onClick={() => handleNavigate(solution.href)}>
								<Typography sx={styles.solutionItemText}>{solution.title}</Typography>
							</Box>
						))}
					</Box>
				</Box>
				<Box sx={styles.mainContent}>
					<Typography sx={styles.sectionTitle}>ALL FEATURES</Typography>
					<Box sx={styles.featuresGrid}>
						{platformFeatures.map((feature, index) => (
							<Box key={`feature-${index}`} sx={styles.featureItem} onClick={() => handleNavigate(feature.href)}>
								<Box sx={styles.featureIcon}>{feature.icon}</Box>
								<Box sx={styles.featureContent}>
									<Typography sx={styles.featureTitle}>
										{feature.title}
										{feature.isNew && <span style={styles.newBadge}>New</span>}
									</Typography>
									<Typography sx={styles.featureDescription}>{feature.description}</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		);
	};

	return isMobile ? renderMobileLayout() : renderDesktopLayout();
};

export default PlatformMenuContent;