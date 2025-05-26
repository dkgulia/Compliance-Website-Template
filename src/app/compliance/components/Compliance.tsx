import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import complianceStyle from '../styles/complianceStyle';
import ComplianceDisplay from './ComplianceDisplay';
import { complianceItems } from '../../constants/complianceData';

const Compliance = () => {
	return (
		<>
			<Box id="compliance" sx={complianceStyle.box}>
				<Container sx={complianceStyle.container}>
					<Box sx={complianceStyle.containerBox}>
						<Typography component="h4" variant="h4" sx={complianceStyle.heading}>
							Supported Compliance Frameworks
						</Typography>
					</Box>
					<ComplianceDisplay items={complianceItems} />
				</Container>
			</Box>
		</>
	);
};

export default Compliance;
