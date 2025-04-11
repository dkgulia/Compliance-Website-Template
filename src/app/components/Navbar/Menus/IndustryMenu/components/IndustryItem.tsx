
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import industryItemStyles from '../styles/industryItemStyles';


interface IndustryItemProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}

const IndustryItem: React.FC<IndustryItemProps> = ({ icon, text, onClick }) => {
  return (
    <ListItem
      onClick={onClick}
    >
      <ListItemIcon sx={industryItemStyles.listItemIcon}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={industryItemStyles.listItemText}
      />
    </ListItem>
  );
};

export default IndustryItem;



