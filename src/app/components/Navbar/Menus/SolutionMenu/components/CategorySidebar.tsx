import React, { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ServiceItem from './ServiceItem';
import solutionData from '../../../constants/solutionsMob';
import categorySidebarStyles from '../styles/categorySidebarStyles';

interface CategorySidebarProps {
	selectedItem: 'item1' | 'item2' | 'item3' | 'item4' | null;
	onSelectCategory: (category: 'item1' | 'item2' | 'item3' | 'item4') => void;
	isMobile?: boolean;
	onClose?: () => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
	selectedItem,
	onSelectCategory,
	isMobile = false,
	onClose,
}) => {
	const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

	const categories = [
		{ id: 'item1', title: 'Networking and Infrastructure Solutions' },
		{ id: 'item2', title: 'Workplace IT Solutions' },
		{ id: 'item3', title: 'Communication and Collaboration Solution' },
		{ id: 'item4', title: 'Specialised IT Solutions' },
	];

	const getCategoryDataId = (categoryId: string): string => {
		switch (categoryId) {
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

	const toggleCategory = (categoryId: string) => {
		setExpandedCategories((prev) => {
			if (prev.includes(categoryId)) {
				return prev.filter((id) => id !== categoryId);
			} else {
				return [...prev, categoryId];
			}
		});
	};

	const isCategoryExpanded = (categoryId: string) => {
		return expandedCategories.includes(categoryId);
	};

	if (!isMobile) {
		return (
			<Box sx={categorySidebarStyles.menuBoxOne}>
				{categories.map((category) => (
					<Box
						key={category.id}
						onClick={() => onSelectCategory(category.id as 'item1' | 'item2' | 'item3' | 'item4')}
						sx={selectedItem === category.id ? categorySidebarStyles.activeCategory : categorySidebarStyles.category}
					>
						<Typography
							sx={
								selectedItem === category.id
									? categorySidebarStyles.activeCategoryText
									: categorySidebarStyles.categoryText
							}
						>
							{category.title}
						</Typography>
					</Box>
				))}
			</Box>
		);
	}

	return (
		<Box sx={categorySidebarStyles.mobileMenuBox}>
			{categories.map((category) => {
				const dataId = getCategoryDataId(category.id);
				const categoryData = solutionData.find((cat) => cat.id === dataId);

				return (
					<Box key={category.id}>
						<Box onClick={() => toggleCategory(category.id)} sx={categorySidebarStyles.mobileCategoryHeader}>
							<Typography sx={categorySidebarStyles.mobileCategoryText}>{category.title}</Typography>
							<ExpandMoreIcon
								sx={{
									color: '#9CA3AF',
									transform: isCategoryExpanded(category.id) ? 'rotate(180deg)' : 'rotate(0deg)',
									transition: 'transform 0.3s ease',
								}}
							/>
						</Box>

						<Collapse in={isCategoryExpanded(category.id)} timeout="auto">
							<Box sx={categorySidebarStyles.mobileServicesContainer}>
								{categoryData &&
									categoryData.services &&
									categoryData.services.map((service, index) => (
										<ServiceItem
											key={`service-${index}`}
											title={service.title}
											description={service.description}
											icon={service.icon}
											href={service.href}
											onClick={onClose}
											isMobile={true}
										/>
									))}
							</Box>
						</Collapse>
					</Box>
				);
			})}
		</Box>
	);
};

export default CategorySidebar;
