import React from 'react';
import { Box, Typography } from '@mui/material';
import ServiceItem from './ServiceItem';
import solutionData from '../../../constants/solutionsMob';
import styles from '../styles/serviceListStyles';

interface ServiceListProps {
	selectedItem: 'item1' | 'item2' | 'item3' | 'item4' | null;
	onClose?: () => void;
	isMobile?: boolean;
}

const ServiceList: React.FC<ServiceListProps> = ({ selectedItem, onClose, isMobile = false }) => {
	const getCategoryId = (selectedItem: 'item1' | 'item2' | 'item3' | 'item4' | null): string => {
		switch (selectedItem) {
			case 'item1':
				return 'networking';
			case 'item2':
				return 'workplace';
			case 'item3':
				return 'Communication';
			case 'item4':
				return 'specialised';
			default:
				return '';
		}
	};

	const categoryId = getCategoryId(selectedItem);
	const activeCategory = solutionData.find((category) => category.id === categoryId);

	if (!activeCategory || !activeCategory.services) {
		return null;
	}

	const renderCategoryContent = () => {
		if (categoryId === 'networking') {
			return (
				<>
					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Infrastructure Solutions</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(0, 4).map((service, index) => (
								<ServiceItem
									key={`infra-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>

					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Networking Solutions</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(4).map((service, index) => (
								<ServiceItem
									key={`network-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>
				</>
			);
		} else if (categoryId === 'workplace') {
			return (
				<>
					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>End User Computing</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(0, 5).map((service, index) => (
								<ServiceItem
									key={`enduser-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>

					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Device as a Service (DaaS)</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(5).map((service, index) => (
								<ServiceItem
									key={`daas-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>
				</>
			);
		} else if (categoryId === 'Communication') {
			return (
				<>
					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && (
							<Typography sx={styles.sectionHeading}>Unified Communication and Collaboration (UCC)</Typography>
						)}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(0, 3).map((service, index) => (
								<ServiceItem
									key={`ucc-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>

					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Audio visual and Collaboration Solution</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(3).map((service, index) => (
								<ServiceItem
									key={`av-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>
				</>
			);
		} else if (categoryId === 'specialised') {
			return (
				<>
					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Surveillance and Security Solutions</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(0, 2).map((service, index) => (
								<ServiceItem
									key={`security-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>

					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Power and Energy Management</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(2, 4).map((service, index) => (
								<ServiceItem
									key={`power-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>

					<Box sx={isMobile ? styles.mobileSectionContainer : {}}>
						{!isMobile && <Typography sx={styles.sectionHeading}>Managed Print Solutions</Typography>}
						<Box sx={isMobile ? styles.mobileServicesGrid : styles.servicesGrid}>
							{activeCategory.services.slice(4).map((service, index) => (
								<ServiceItem
									key={`print-${index}`}
									title={service.title}
									description={service.description}
									icon={service.icon}
									href={service.href}
									onClick={onClose}
									isMobile={isMobile}
								/>
							))}
						</Box>
					</Box>
				</>
			);
		}
	};

	return (
		<Box sx={isMobile ? styles.mobileMiddleSection : styles.middleSection}>
			<Box sx={styles.servicesContainer}>{renderCategoryContent()}</Box>
		</Box>
	);
};

export default ServiceList;
