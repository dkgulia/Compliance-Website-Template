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
	SxProps,
	Theme,
	Autocomplete,
	TextField,
} from '@mui/material';
import { FormikProps } from 'formik';
import { addDataToGoogleSheetRequest } from '../../../api/googleSheetRequest';
import { getCurrentTime } from '../../../utils/getCurrentTime';
import { SheetNameType } from '../../constants/sheetTypes';

export interface ComplianceFormValues {
	fullName: string;
	email: string;
	companyName: string;
	phoneNumber: string;
	country: string;
}

interface ComplianceFormProps extends FormikProps<ComplianceFormValues> {
	title: string;
	subtitle: string;
	buttonText?: string;
	sheetName: SheetNameType;
	formStyles: Record<string, SxProps<Theme>>;
	selectedOptions: string[];
	onOptionsChange: (options: string[]) => void;
	complianceOptions: string[];
}

const countries = [
	'United States',
	'United Kingdom',
	'India',
	'Germany',
	'France',
	'China',
	'Japan',
	'South Korea',
	'Australia',
	'Brazil',
	'Russia',
	'Italy',
	'Spain',
	'Netherlands',
	'Sweden',
	'Norway',
	'Denmark',
	'Switzerland',
	'Austria',
	'Belgium',
	'Canada',
	'Mexico',
	'Argentina',
	'Chile',
	'Colombia',
	'Peru',
	'Venezuela',
	'South Africa',
	'Egypt',
	'Nigeria',
	'Kenya',
	'Morocco',
	'Turkey',
	'Saudi Arabia',
	'UAE',
	'Israel',
	'Thailand',
	'Singapore',
	'Malaysia',
	'Indonesia',
	'Philippines',
	'Vietnam',
	'New Zealand',
	'Ireland',
	'Portugal',
	'Greece',
	'Poland',
	'Czech Republic',
	'Hungary',
	'Romania',
	'Bulgaria',
	'Croatia',
	'Slovenia',
	'Slovakia',
	'Estonia',
	'Latvia',
	'Lithuania',
	'Finland',
	'Iceland',
	'Luxembourg',
	'Malta',
	'Cyprus',
];

const ComplianceForm: React.FC<ComplianceFormProps> = ({
	values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	resetForm,
	setFieldValue,
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

		if (
			values.fullName &&
			!errors.fullName &&
			values.email &&
			!errors.email &&
			values.companyName &&
			!errors.companyName &&
			values.phoneNumber &&
			!errors.phoneNumber &&
			values.country &&
			!errors.country
		) {
			setLoading(true);
			const data = [
				values.fullName,
				values.email,
				values.companyName,
				values.phoneNumber,
				values.country,
				getCurrentTime(),
				selectedOptions.join(', '),
			];
			try {
				await addDataToGoogleSheetRequest(sheetName, data);
				setAlert({ type: 'success', message: 'Your response has been saved.' });
				setSubmitted(true);
				resetForm();
				onOptionsChange([]);
				setTimeout(() => {
					window.open('https://cal.com/compliancehub/demo', '_blank');
				}, 1500);
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
	const getButtonText = () => {
		if (loading) return 'Submitting...';
		if (submitted) return 'Request Sent';
		return buttonText;
	};

	const handleCountryChange = (event: any, newValue: string | null) => {
		setFieldValue('country', newValue || '');
	};

	return (
		<Box sx={formStyles.formContainer}>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={1.5}>
					{/* Header */}
					<Grid size={{ xs: 12 }}>
						<Typography variant="h4" sx={formStyles.formHeading}>
							{title}
						</Typography>
						<Typography sx={{ marginBottom: '1rem', color: 'text.secondary', fontSize: '0.9rem' }}>
							{subtitle}
						</Typography>
					</Grid>

					{/* Row 1: Full Name & Email */}
					<Grid size={{ xs: 12, sm: 6 }}>
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
							<FormHelperText sx={formStyles.formHelperText}>{touched.fullName && errors.fullName}</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12, sm: 6 }}>
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

					{/* Row 2: Company Name & Phone Number */}
					<Grid size={{ xs: 12, sm: 6 }}>
						<FormControl fullWidth error={touched.companyName && Boolean(errors.companyName)}>
							<Typography sx={formStyles.formLabel}>Company Name</Typography>
							<OutlinedInput
								id="companyName"
								name="companyName"
								placeholder="Enter your company name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.companyName}
								sx={formStyles.formInput}
							/>
							<FormHelperText sx={formStyles.formHelperText}>
								{touched.companyName && errors.companyName}
							</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12, sm: 6 }}>
						<FormControl fullWidth error={touched.phoneNumber && Boolean(errors.phoneNumber)}>
							<Typography sx={formStyles.formLabel}>Phone Number</Typography>
							<OutlinedInput
								id="phoneNumber"
								name="phoneNumber"
								placeholder="Enter your phone number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phoneNumber}
								sx={formStyles.formInput}
							/>
							<FormHelperText sx={formStyles.formHelperText}>
								{touched.phoneNumber && errors.phoneNumber}
							</FormHelperText>
						</FormControl>
					</Grid>

					{/* Row 3: Country (Full Width) */}
					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.country && Boolean(errors.country)}>
							<Typography sx={formStyles.formLabel}>Country</Typography>
							<Autocomplete
								id="country"
								options={countries}
								value={values.country}
								onChange={handleCountryChange}
								onBlur={handleBlur}
								renderInput={(params) => (
									<TextField
										{...params}
										placeholder="Select or type your country"
										variant="outlined"
										sx={formStyles.formInput}
									/>
								)}
								freeSolo
							/>
							<FormHelperText sx={formStyles.formHelperText}>{touched.country && errors.country}</FormHelperText>
						</FormControl>
					</Grid>

					{/* Compliances Section */}
					<Grid size={{ xs: 12 }}>
						<Typography sx={formStyles.compliancesLabel}>Compliances Interested In*</Typography>
						<Grid container spacing={0.5}>
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

					{/* Submit Button */}
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
