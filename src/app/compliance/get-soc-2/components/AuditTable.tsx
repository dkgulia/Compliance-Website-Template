'use client'
import React from 'react';
import {
	Box,
	Container,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Divider,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import auditTableStyles from '../styles/AuditTableStyles';
import soc2Data from '../../get-soc-2/constants/sco2Data';

const AuditTable = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box sx={auditTableStyles.box}>
			<Container sx={auditTableStyles.container}>
				<Typography component="h2" variant="h4" sx={auditTableStyles.title}>
					Securely Manage Your Customer Data
				</Typography>
				<Typography variant="body1" sx={auditTableStyles.subtitle}>
					SOC 2 is a cybersecurity compliance framework designed for service and technology providers handling customer data.
				</Typography>
				<Divider sx={auditTableStyles.divider} />

				<Box sx={auditTableStyles.infoBox}>
					<Box sx={auditTableStyles.iconBox}>
						<SecurityIcon sx={auditTableStyles.icon} />
						<Typography variant="h6" sx={auditTableStyles.iconTitle}>SOC 2 Type I</Typography>
						<Typography variant="body2" sx={auditTableStyles.iconDescription}>
							Evaluates security controls at a specific point in time.
						</Typography>
					</Box>
					<Box sx={auditTableStyles.iconBox}>
						<VerifiedUserIcon sx={auditTableStyles.icon} />
						<Typography variant="h6" sx={auditTableStyles.iconTitle}>SOC 2 Type II</Typography>
						<Typography variant="body2" sx={auditTableStyles.iconDescription}>
							Assesses ongoing effectiveness over a 3-12 month period.
						</Typography>
					</Box>
				</Box>


				{!isSmallScreen ? (
					<TableContainer component={Paper} sx={auditTableStyles.tableContainer}>
						<Table>
							<TableHead sx={auditTableStyles.tableHead}>
								<TableRow>
									<TableCell sx={auditTableStyles.tableCellHead}>Audit Type</TableCell>
									<TableCell sx={auditTableStyles.tableCellHead}>Audit Period</TableCell>
									<TableCell sx={auditTableStyles.tableCellHead}>Audit Description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{soc2Data.map((row, index) => (
									<TableRow key={index}>
										<TableCell sx={auditTableStyles.tableCellBody}>{row.type}</TableCell>
										<TableCell sx={auditTableStyles.tableCellBody}>{row.period}</TableCell>
										<TableCell sx={auditTableStyles.tableCellBody}>{row.description}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				) : (
					<Box sx={auditTableStyles.cardContainer}>
						{soc2Data.map((row, index) => (
							<Paper key={index} sx={auditTableStyles.card}>
								<Typography variant="h6" sx={auditTableStyles.cardTitle}>{row.type}</Typography>
								<Typography sx={auditTableStyles.cardSubtitle}><strong>Period:</strong> {row.period}</Typography>
								<Typography sx={auditTableStyles.cardDescription}>{row.description}</Typography>
							</Paper>
						))}
					</Box>
				)}
			</Container>
		</Box>
	);
};

export default AuditTable;
