// SolutionsSection.tsx
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import CategorySidebar from './CategorySidebar';
import ServiceList from './ServiceList';
import RightSection from './RightSection';

interface SolutionsSectionProps {
  selectedItem?: 'item1' | 'item2' | 'item3' | 'item4' | null;
  setSelectedItem?: React.Dispatch<React.SetStateAction<'item1' | 'item2' | 'item3' | 'item4' | null>>;
  onClose?: () => void;
}

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  selectedItem = 'item1',
  setSelectedItem = () => {},
  onClose = () => {}
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // For mobile, use the accordion menu without lorem ipsum
  if (isMobile) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        overflowY: 'auto',
      }}>
        <CategorySidebar
          selectedItem={selectedItem}
          onSelectCategory={setSelectedItem}
          isMobile={true}
          onClose={onClose}
        />
        {/* No RightSection (lorem ipsum) on mobile */}
      </Box>
    );
  }

  // Desktop layout with the sidebar, service list, and RightSection
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: { xs: 'column', sm: 'row' },
      height: '100%',
      backgroundColor: '#FFFFFF',
    }}>
      <CategorySidebar
        selectedItem={selectedItem}
        onSelectCategory={setSelectedItem}
      />
      <ServiceList
        selectedItem={selectedItem}
        onClose={onClose}
      />
      <RightSection />
    </Box>
  );
};

export default SolutionsSection;