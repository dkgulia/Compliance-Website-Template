import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import painPointStyle from '../styles/painPointStyle';

const PainPoints = () => (
	<Box sx={painPointStyle.container}>
		<Box sx={painPointStyle.contentBox}>
			<Typography component="h4" variant="h4" sx={painPointStyle.headline}>
				Challenges in Compliance
			</Typography>
			<Stack spacing={2} sx={painPointStyle.bulletList}>
				<Box sx={painPointStyle.bulletItem}>
					<VerifiedIcon sx={painPointStyle.checkIcon} />
					<Typography>
						<Typography component="span" sx={{ fontWeight: 'bold' }}>
							Evolving Threats:
						</Typography>{' '}
						Cyber criminals constantly develop new attack methods.
					</Typography>
				</Box>
				<Box sx={painPointStyle.bulletItem}>
					<VerifiedIcon sx={painPointStyle.checkIcon} />
					<Typography>
						<Typography component="span" sx={{ fontWeight: 'bold' }}>
							Complex Regulations:
						</Typography>{' '}
						Navigating intricate compliance requirements can be overwhelming.
					</Typography>
				</Box>
				<Box sx={painPointStyle.bulletItem}>
					<VerifiedIcon sx={painPointStyle.checkIcon} />
					<Typography>
						<Typography component="span" sx={{ fontWeight: 'bold' }}>
							Manual Processes:
						</Typography>{' '}
						Inefficient, error-prone manual compliance tasks slow businesses down.
					</Typography>
				</Box>
			</Stack>
			<Typography variant="body1" sx={painPointStyle.solutionStatement}>
				ComplianceHub simplifies compliance, minimizes errors, and ensures businesses stay secure and audit-ready with
				automated workflows.
			</Typography>
		</Box>
	</Box>
);

export default PainPoints;
