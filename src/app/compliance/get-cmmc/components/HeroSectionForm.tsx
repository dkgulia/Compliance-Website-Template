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
import { FormValues } from './EnhancedHeroSectionForm';
// import { addDataToGoogleSheetRequest } from '../../../../api/googleSheetRequest';
// import { sheetNameTypes } from '../../../../constants/interfaces';
// import { getCurrentTime } from '../../../../utils/getCurrentTime';

interface HeroSectionFormProps extends FormikProps<FormValues> {
	selectedOptions: string[];
	onOptionsChange: (options: string[]) => void;
}

const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
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
	const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

	const toggleOption = (option: string) => {
		onOptionsChange(
			selectedOptions.includes(option)
				? selectedOptions.filter((selected) => selected !== option)
				: [...selectedOptions, option]
		);
	};

	// const handleClick = async () => {
	// 	if (values.name && !errors.name && values.email && !errors.email) {
	// 		if (selectedOptions.length === 0) {
	// 			setAlert({ type: 'error', message: 'Please select at least one compliance option.' });
	// 			return;
	// 		}

	// 		setLoading(true);
	// 		const sheetName = sheetNameTypes.cmmcForm;
	// 		const data = [
	// 			values.name,
	// 			values.email,
	// 			getCurrentTime(),
	// 			selectedOptions.join(', ')
	// 		];

	// 		try {
	// 			await addDataToGoogleSheetRequest(sheetName, data);
	// 			setAlert({ type: 'success', message: 'Your response has been saved.' });
	// 			resetForm();
	// 			onOptionsChange(['ISO 27001', 'ISO 42001', 'ISO 27018']);
	// 		} catch (err: any) {
	// 			let errorMessage = 'Network Error';
	// 			if (err.response?.data?.message) {
	// 				errorMessage = err.response.data.message;
	// 			}
	// 			setAlert({ type: 'error', message: errorMessage });
	// 			console.error(err);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	}
	// };

	const handleSnackbarClose = () => {
		setAlert(null);
	};

	return (
		<Box sx={heroSectionStyle.formContainer}>
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
						<Typography sx={{ marginBottom: '1rem', color: 'text.primary' }}>
							Get answers to all your questions about CMMC compliance.
						</Typography>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.name && Boolean(errors.name)}>
							<Typography sx={heroSectionStyle.formLabel}>Full Name</Typography>
							<OutlinedInput
								id="name"
								name="name"
								placeholder="Enter your full name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								sx={heroSectionStyle.formInput}
							/>
							<FormHelperText sx={heroSectionStyle.formHelperText}>{touched.name && errors.name}</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControl fullWidth error={touched.email && Boolean(errors.email)}>
							<Typography sx={heroSectionStyle.formLabel}>Work Email</Typography>
							<OutlinedInput
								id="email"
								name="email"
								placeholder="Enter your email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								sx={heroSectionStyle.formInput}
							/>
							<FormHelperText sx={heroSectionStyle.formHelperText}>{touched.email && errors.email}</FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Typography sx={heroSectionStyle.compliancesLabel}>Compliances Interested In*</Typography>
						<Grid container spacing={1}>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('ISO 27001')}
											onChange={() => toggleOption('ISO 27001')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="ISO 27001"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('ISO 42001')}
											onChange={() => toggleOption('ISO 42001')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="ISO 42001"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('ISO 27018')}
											onChange={() => toggleOption('ISO 27018')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="ISO 27018"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('SOC 2')}
											onChange={() => toggleOption('SOC 2')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="SOC 2"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('GDPR')}
											onChange={() => toggleOption('GDPR')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="GDPR"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('HIPAA')}
											onChange={() => toggleOption('HIPAA')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="HIPAA"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('CCPA')}
											onChange={() => toggleOption('CCPA')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="CCPA"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('PCI DSS')}
											onChange={() => toggleOption('PCI DSS')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="PCI DSS"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('NIST Frameworks')}
											onChange={() => toggleOption('NIST Frameworks')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="NIST Frameworks"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('ISO 22301')}
											onChange={() => toggleOption('ISO 22301')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="ISO 22301"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('ISO 20000-1')}
											onChange={() => toggleOption('ISO 20000-1')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="ISO 20000-1"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('ISO 27701')}
											onChange={() => toggleOption('ISO 27701')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="ISO 27701"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('DORA')}
											onChange={() => toggleOption('DORA')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="DORA"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('CMMC')}
											onChange={() => toggleOption('CMMC')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="CMMC"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
							<Grid size={{ xs: 6, sm: 4 }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={selectedOptions.includes('PDPA')}
											onChange={() => toggleOption('PDPA')}
											sx={heroSectionStyle.checkbox}
										/>
									}
									label="PDPA"
									sx={heroSectionStyle.checkboxLabel}
								/>
							</Grid>
						</Grid>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Button
							type="button"
							fullWidth
							variant="contained"
							sx={heroSectionStyle.button}
							//onClick={handleClick}
							disabled={loading}
							disableElevation
						>
							{loading ? 'Submitting...' : 'Book Your Demo'}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default HeroSectionForm;