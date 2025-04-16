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
import heroSectionStyle from '../styles/heroSectionStyle';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedHeroSectionForm';
// import { addDataToGoogleSheetRequest } from '../../../../api/googleSheetRequest';
// import { sheetNameTypes } from '../../../../constants/interfaces';
// import { getCurrentTime } from '../../../../utils/getCurrentTime';
import theme from '../../../../theme';

interface HeroSectionFormProps extends FormikProps<FormValues> {}

const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
	values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	resetForm,
}) => {
	const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
	const [loading, setLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	// const handleClick = async () => {
	// 	if (!isChecked) {
	// 		setAlert({ type: 'error', message: 'You must agree to the terms before submitting.' });
	// 		return;
	// 	}

	// 	if (values.fullName && !errors.fullName && values.email && !errors.email) {
	// 		setLoading(true);
	// 		const sheetName = sheetNameTypes.pciDssForm;
	// 		const data = [values.fullName, values.email, getCurrentTime()];

	// 		try {
	// 			await addDataToGoogleSheetRequest(sheetName, data);
	// 			setAlert({ type: 'success', message: 'Your response has been saved.' });
	// 			resetForm();
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
		<Box>
			{alert && (
				<Snackbar
					open={!!alert}
					autoHideDuration={6000}
					onClose={handleSnackbarClose}
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				>
					<Alert onClose={handleSnackbarClose} severity={alert.type}>
						{alert.message}
					</Alert>
				</Snackbar>
			)}

			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid size={{ xs: 12 }} sx={heroSectionStyle.gridItem}>
						<FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
							<Typography sx={heroSectionStyle.formLabel}>Full Name</Typography>
							<OutlinedInput
								id="fullName"
								name="fullName"
								placeholder="Enter your full name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.fullName}
								sx={heroSectionStyle.formInput}
							/>
							<FormHelperText sx={heroSectionStyle.formHelperText}>
                                {touched.fullName && errors.fullName}
                            </FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }} sx={heroSectionStyle.gridItem}>
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
							<FormHelperText sx={heroSectionStyle.formHelperText}>
                                {touched.email && errors.email}
                            </FormHelperText>
						</FormControl>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<FormControlLabel
							control={
								<Checkbox
									checked={isChecked}
									onChange={(e) => setIsChecked(e.target.checked)}
									color="primary"
									sx={heroSectionStyle.checkbox}
								/>
							}
							label={
								<Typography>
									I agree to the terms and conditions.
								</Typography>
							}
						/>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Typography sx={heroSectionStyle.secondaryText}>
							By clicking submit below, you consent to allow Hexafort to store and process the Personal Data submitted by
							you above as per our{' '}
							{/* <Link href="/privacy-policy" target="_blank" style={{ color: theme.palette.primary.main }}>
								Privacy Policy
							</Link> */}
						</Typography>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Button
							type="button"
							fullWidth
							sx={heroSectionStyle.button}
							// onClick={handleClick}
							disabled={loading || !isChecked}
						>
							{loading ? 'Submitting...' : 'Submit'}
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default HeroSectionForm;