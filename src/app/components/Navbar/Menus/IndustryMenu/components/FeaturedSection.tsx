import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import pageStyles from '../styles/pageStyles';
import industryItemStyles from '../styles/industryItemStyles';
import { industryData } from '../../../constants/industrialists'

interface FeaturedSectionProps {
  onClose?: () => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onClose }) => {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
    if (onClose) onClose();
  };


  const column1Items = industryData.left.slice(0, 5);
  const column2Items = industryData.left.slice(5, 10);
  const column3Items = industryData.left.slice(10, 15);
  const column4Items = industryData.right.slice(0, 5);
  const column5Items = industryData.right.slice(5, 7);

  return (
    <>
      <Typography sx={pageStyles.categoryHeading}>
        Industries
      </Typography>

      <Box sx={pageStyles.industriesGrid}>
        <Box sx={pageStyles.columnContainer}>
          {column1Items.map((item, index) => (
            <Box
              key={`col1-${index}`}
              sx={industryItemStyles.regularItem}
              onClick={() => handleNavigate(item.href)}
            >
              <Box sx={industryItemStyles.listItemIcon}>
                {item.icon}
              </Box>
              <Typography sx={industryItemStyles.listItemText}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={pageStyles.columnContainer}>
          {column2Items.map((item, index) => (
            <Box
              key={`col2-${index}`}
              sx={industryItemStyles.regularItem}
              onClick={() => handleNavigate(item.href)}
            >
              <Box sx={industryItemStyles.listItemIcon}>
                {item.icon}
              </Box>
              <Typography sx={industryItemStyles.listItemText}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={pageStyles.columnContainer}>
          {column3Items.map((item, index) => (
            <Box
              key={`col3-${index}`}
              sx={industryItemStyles.regularItem}
              onClick={() => handleNavigate(item.href)}
            >
              <Box sx={industryItemStyles.listItemIcon}>
                {item.icon}
              </Box>
              <Typography sx={industryItemStyles.listItemText}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={pageStyles.columnContainer}>
          {column4Items.map((item, index) => (
            <Box
              key={`col4-${index}`}
              sx={industryItemStyles.regularItem}
              onClick={() => handleNavigate(item.href)}
            >
              <Box sx={industryItemStyles.listItemIcon}>
                {item.icon}
              </Box>
              <Typography sx={industryItemStyles.listItemText}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={pageStyles.columnContainer}>
          {column5Items.map((item, index) => (
            <Box
              key={`col5-${index}`}
              sx={industryItemStyles.regularItem}
              onClick={() => handleNavigate(item.href)}
            >
              <Box sx={industryItemStyles.listItemIcon}>
                {item.icon}
              </Box>
              <Typography sx={industryItemStyles.listItemText}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default FeaturedSection;