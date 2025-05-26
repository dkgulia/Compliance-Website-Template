import React from 'react';
import { Grid, Box } from '@mui/material';
import { complianceItems } from '../../constants/complianceData';
import ComplianceOptionCard from './ComplianceOptionCard';
import optionCardStyles from '../styles/optionCardStyles';
import { ComplianceOptions } from '../../constants/complianceData';

interface ComplainceOptionNavigationComponentProps {
	prev: ComplianceOptions;
	next: ComplianceOptions;
}

const ComplainceOptionNavigationComponent: React.FC<ComplainceOptionNavigationComponentProps> = ({ prev, next }) => {
	const prevCompliance = complianceItems.find((item) => item.title === prev);
	const nextCompliance = complianceItems.find((item) => item.title === next);

	return (
		<Box sx={optionCardStyles.box}>
			<Grid container spacing={{ xs: 2, md: 2 }} justifyContent="center" alignItems="center">
				<Grid size={{ xs: 12, sm: 6 }}>{prevCompliance && <ComplianceOptionCard option={prevCompliance} left />}</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>{nextCompliance && <ComplianceOptionCard option={nextCompliance} />}</Grid>
			</Grid>
		</Box>
	);
};

export default ComplainceOptionNavigationComponent;
