'use client';
import React, { useState } from 'react';
import {
	Grid,
	Box,
	FormControl,
	OutlinedInput,
	FormHelperText,
	Button,
	Typography,
	FormControlLabel,
	Checkbox,
	Snackbar,
	Alert,
} from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedCmmcForm';

// Options specific to CMMC
const cmmcOptionsArray = ['Level 1 (Foundational)', 'Level 2 (Advanced)', 'Level 3 (Expert)'];

interface CmmcCompliantFormProps extends FormikProps<FormValues> {
	selectedOptions: string[];
	onOptionsChange: (options: string[]) => void;
}

const CmmcCompliantForm: React.FC<CmmcCompliantFormProps> = ({
	values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	resetForm,
	selectedOptions,
	onOptionsChange,
}) => {
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState<{
		type: 'success' | 'error';
		message: string;
	} | null>(null);

	const toggleOption = (option: string) => {
		onOptionsChange(
			selectedOptions.includes(option)
				? selectedOptions.filter((selected) => selected !== option)
				: [...selectedOptions, option]
		);
	};

	const handleClick = () => {
		if (values.fullName && !errors.fullName && values.email && !errors.email) {
			if (selectedOptions.length === 0) {
				setAlert({
					type: 'error',
					message: 'Please select at least one CMMC level.',
				});
				return;
			}

			setLoading(true);

			// Simulating form submission
			setTimeout(() => {
				setAlert({
					type: 'success',
					message: 'Your demo request has been received! Our team will contact you shortly.',
				});
				resetForm();
				onOptionsChange([cmmcOptionsArray[0]]);
				setLoading(false);
			}, 1000);
		}
	};

	const handleSnackbarClose = () => {
		setAlert(null);
	};

	return (
		<Box sx={heroSectionStyle.container}>
			{alert && (
				<Snackbar
					open={!!alert}
					autoHideDuration={6000}
					onClose={handleSnackbarClose}
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				>
					<Alert onClose={handleSnackbarClose} severity={alert.type} sx={{ width: '100%' }}>
						{alert.message}
					</Alert>
				</Snackbar>
			)}
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid size={{ xs: 12 }}>
						<Typography variant="h4" sx={heroSectionStyle.formHeading}>
							Book Your CMMC Demo Today!
						</Typography>
						<Typography sx={{ marginBottom: '1rem', color: 'white' }}>
							Get answers to all your DoD compliance questions.
						</Typography>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
							<Typography sx={heroSectionStyle.compliancesLabel}>Full Name</Typography>
							<OutlinedInput
								id="fullName"
								name="fullName"
								placeholder="Enter your full name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.fullName}
								sx={{ color: 'white' }}
							/>
							<FormHelperText>{touched.fullName && errors.fullName}</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.email && Boolean(errors.email)}>
							<Typography sx={heroSectionStyle.compliancesLabel}>Work Email</Typography>
							<OutlinedInput
								id="email"
								name="email"
								placeholder="Enter your email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								sx={{ color: 'white' }}
							/>
							<FormHelperText>{touched.email && errors.email}</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Typography sx={heroSectionStyle.compliancesLabel}>CMMC Levels of Interest*</Typography>
						<Grid container spacing={1}>
							{cmmcOptionsArray.map((option, index) => (
								<Grid size={{ xs: 12, md: 4 }} key={index}>
									<FormControlLabel
										control={
											<Checkbox checked={selectedOptions.includes(option)} onChange={() => toggleOption(option)} />
										}
										label={option}
										sx={heroSectionStyle.checkboxLabel}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Button
							type="button"
							fullWidth
							variant="contained"
							sx={heroSectionStyle.button}
							onClick={handleClick}
							disabled={loading}
						>
							{loading ? 'Submitting...' : 'Book Your Demo'}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default CmmcCompliantForm;
