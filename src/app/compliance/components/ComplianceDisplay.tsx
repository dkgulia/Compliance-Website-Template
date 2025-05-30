import * as React from 'react';
import { Grid } from '@mui/material';
import ComplianceCard from './ComplianceCard';
import { ComplianceFramework } from '../../constants/complianceData';

const ComplianceDisplay = ({ items }: { items: ComplianceFramework[] }) => {
	return (
		<Grid container spacing={2}>
			{items.map((item, index) => (
				<Grid size ={{xs:12,sm:6,md:4}}  key={index}>
					<ComplianceCard item={item} />
				</Grid>
			))}
		</Grid>
	);
};

export default ComplianceDisplay;