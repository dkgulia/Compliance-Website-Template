import React, { useState } from 'react';
import {
	Grid,
	Box,
	FormControl,
	OutlinedInput,
	FormHelperText,
	Button,
	Typography,
	Snackbar,
	Alert,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import { FormikProps } from 'formik';
import { addDataToGoogleSheetRequest } from '../../../api/googleSheetRequest';
import { getCurrentTime } from '../../../utils/getCurrentTime';
import { sheetNameTypes } from '../../constants/sheetTypes';
export interface ComplianceFormValues {
	fullName: string;
	email: string;
}
interface ComplianceFormProps extends FormikProps<ComplianceFormValues> {
	title: string;
	subtitle: string;
	buttonText?: string;
	sheetName: string;
	formStyles: any;
	selectedOptions: string[];
	onOptionsChange: (options: string[]) => void;
	complianceOptions: string[];
}

const ComplianceForm: React.FC<ComplianceFormProps> = ({
	values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	resetForm,
	selectedOptions,
	onOptionsChange,
	title,
	subtitle,
	buttonText = 'Book Your Demo',
	sheetName,
	formStyles,
	complianceOptions,
}) => {
	const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const toggleOption = (option: string) => {
		onOptionsChange(
			selectedOptions.includes(option)
				? selectedOptions.filter((selected) => selected !== option)
				: [...selectedOptions, option]
		);
	};

	const handleClick = async () => {
		if (selectedOptions.length === 0) {
			setAlert({ type: 'error', message: 'Please select at least one compliance.' });
			return;
		}

		if (values.fullName && !errors.fullName && values.email && !errors.email) {
			setLoading(true);
			const data = [values.fullName, values.email, getCurrentTime(), selectedOptions.join(', ')];
			try {
				await addDataToGoogleSheetRequest(sheetName, data);
				setAlert({ type: 'success', message: 'Your response has been saved.' });
				setSubmitted(true);
				resetForm();
				onOptionsChange([]);
			} catch (err: any) {
				let errorMessage = 'Network Error';
				if (err.response?.data?.message) {
					errorMessage = err.response.data.message;
				}
				setAlert({ type: 'error', message: errorMessage });
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
	};

	const handleSnackbarClose = () => {
		setAlert(null);
	};

	// Determine button text based on loading and submitted states
	const getButtonText = () => {
		if (loading) return 'Submitting...';
		if (submitted) return 'Request Sent';
		return buttonText;
	};

	return (
		<Box sx={formStyles.formContainer}>
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
						<Typography variant="h4" sx={formStyles.formHeading}>
							{title}
						</Typography>
						<Typography sx={{ marginBottom: '1rem', color: 'text.primary' }}>
							{subtitle}
						</Typography>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
							<Typography sx={formStyles.formLabel}>Full Name</Typography>
							<OutlinedInput
								id="fullName"
								name="fullName"
								placeholder="Enter your full name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.fullName}
								sx={formStyles.formInput}
							/>
							<FormHelperText sx={formStyles.formHelperText}>
								{touched.fullName && errors.fullName}
							</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.email && Boolean(errors.email)}>
							<Typography sx={formStyles.formLabel}>Work Email</Typography>
							<OutlinedInput
								id="email"
								name="email"
								placeholder="Enter your email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								sx={formStyles.formInput}
							/>
							<FormHelperText sx={formStyles.formHelperText}>{touched.email && errors.email}</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Typography sx={formStyles.compliancesLabel}>Compliances Interested In*</Typography>
						<Grid container spacing={1}>
							{complianceOptions.map((option, index) => (
								<Grid size={{ xs: 6, sm: 4 }} key={index}>
									<FormControlLabel
										control={
											<Checkbox
												checked={selectedOptions.includes(option)}
												onChange={() => toggleOption(option)}
												sx={formStyles.checkbox}
											/>
										}
										label={option}
										sx={formStyles.checkboxLabel}
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
							sx={formStyles.button}
							onClick={handleClick}
							disabled={loading || submitted}
							disableElevation
						>
							{getButtonText()}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default ComplianceForm;