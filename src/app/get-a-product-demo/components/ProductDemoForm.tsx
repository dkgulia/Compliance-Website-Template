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

export interface ProductDemoFormValues {
   workEmail: string;
   firstName: string;
   lastName: string;
   companyName: string;
   country: string;
   howDidYouHear: string;
}

interface ProductDemoFormProps extends FormikProps<ProductDemoFormValues> {
   title: string;
   subtitle: string;
   buttonText?: string;
   sheetName: SheetNameType;
   formStyles: Record<string, SxProps<Theme>>;
   selectedProducts: string[];
   onProductsChange: (products: string[]) => void;
   productOptions: string[];
}

// Countries list for autocomplete
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

const ProductDemoForm: React.FC<ProductDemoFormProps> = ({
   values,
   touched,
   errors,
   handleChange,
   handleBlur,
   handleSubmit,
   resetForm,
   setFieldValue,
   selectedProducts,
   onProductsChange,
   title,
   subtitle,
   buttonText = 'Get Started',
   sheetName,
   formStyles,
   productOptions,
}) => {
   const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
   const [loading, setLoading] = useState(false);
   const [submitted, setSubmitted] = useState(false);

   const toggleProduct = (product: string) => {
   	onProductsChange(
   		selectedProducts.includes(product)
   			? selectedProducts.filter((selected) => selected !== product)
   			: [...selectedProducts, product]
   	);
   };

   const handleClick = async () => {
   	if (selectedProducts.length === 0) {
   		setAlert({ type: 'error', message: 'Please select at least one product.' });
   		return;
   	}

   	if (values.workEmail && !errors.workEmail &&
   		values.firstName && !errors.firstName &&
   		values.lastName && !errors.lastName &&
   		values.companyName && !errors.companyName &&
   		values.country && !errors.country) {
   		setLoading(true);
   		const data = [
   			values.workEmail,
   			`${values.firstName} ${values.lastName}`,
   			values.companyName,
   			values.country,
   			values.howDidYouHear,
   			getCurrentTime(),
   			selectedProducts.join(', ')
   		];
   		try {
			await addDataToGoogleSheetRequest(sheetName, data);
			setAlert({ type: 'success', message: 'Demo request submitted successfully! Redirecting...' });
			setSubmitted(true);
			resetForm();
			onProductsChange([]);

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

   // Determine button text based on loading and submitted states
   const getButtonText = () => {
   	if (loading) return 'Submitting...';
   	if (submitted) return 'Demo Requested';
   	return buttonText;
   };

   const handleCountryChange = (event: any, newValue: string | null) => {
   	setFieldValue('country', newValue || '');
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
   			<Grid container spacing={1.2}>
   				{/* Header */}
   				<Grid size={{ xs: 12 }}>
   					<Typography variant="h4" sx={formStyles.formHeading}>
   						{title}
   					</Typography>
   					<Typography sx={{ marginBottom: '1rem', color: 'text.primary', fontSize: '0.9rem' }}>
   						{subtitle}
   					</Typography>
   				</Grid>

   				{/* Row 1: Work Email (Full Width) */}
   				<Grid size={{ xs: 12 }}>
   					<FormControl fullWidth error={touched.workEmail && Boolean(errors.workEmail)}>
   						<Typography sx={formStyles.formLabel}>Work Email*</Typography>
   						<OutlinedInput
   							id="workEmail"
   							name="workEmail"
   							placeholder="Enter your work email"
   							onChange={handleChange}
   							onBlur={handleBlur}
   							value={values.workEmail}
   							sx={formStyles.formInput}
   						/>
   						<FormHelperText sx={formStyles.formHelperText}>
   							{touched.workEmail && errors.workEmail}
   						</FormHelperText>
   					</FormControl>
   				</Grid>

   				{/* Row 2: First Name & Last Name */}
   				<Grid size={{ xs: 12, sm: 6 }}>
   					<FormControl fullWidth error={touched.firstName && Boolean(errors.firstName)}>
   						<Typography sx={formStyles.formLabel}>First Name*</Typography>
   						<OutlinedInput
   							id="firstName"
   							name="firstName"
   							placeholder="Enter your first name"
   							onChange={handleChange}
   							onBlur={handleBlur}
   							value={values.firstName}
   							sx={formStyles.formInput}
   						/>
   						<FormHelperText sx={formStyles.formHelperText}>
   							{touched.firstName && errors.firstName}
   						</FormHelperText>
   					</FormControl>
   				</Grid>

   				<Grid size={{ xs: 12, sm: 6 }}>
   					<FormControl fullWidth error={touched.lastName && Boolean(errors.lastName)}>
   						<Typography sx={formStyles.formLabel}>Last Name*</Typography>
   						<OutlinedInput
   							id="lastName"
   							name="lastName"
   							placeholder="Enter your last name"
   							onChange={handleChange}
   							onBlur={handleBlur}
   							value={values.lastName}
   							sx={formStyles.formInput}
   						/>
   						<FormHelperText sx={formStyles.formHelperText}>
   							{touched.lastName && errors.lastName}
   						</FormHelperText>
   					</FormControl>
   				</Grid>

   				{/* Row 3: Company Name & Country */}
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
   					<FormControl fullWidth error={touched.country && Boolean(errors.country)}>
   						<Typography sx={formStyles.formLabel}>Country*</Typography>
   						<Autocomplete
   							id="country"
   							options={countries}
   							value={values.country}
   							onChange={handleCountryChange}
   							onBlur={handleBlur}
   							renderInput={(params) => (
   								<TextField
   									{...params}
   									placeholder="Select your country"
   									variant="outlined"
   									sx={formStyles.formInput}
   								/>
   							)}
   							freeSolo
   						/>
   						<FormHelperText sx={formStyles.formHelperText}>
   							{touched.country && errors.country}
   						</FormHelperText>
   					</FormControl>
   				</Grid>

   				{/* Row 4: How did you hear about us (Full Width) */}
   				<Grid size={{ xs: 12 }}>
   					<FormControl fullWidth>
   						<Typography sx={formStyles.formLabel}>How did you hear about ComplianceHub?*</Typography>
   						<OutlinedInput
   							id="howDidYouHear"
   							name="howDidYouHear"
   							placeholder="Please tell us how you heard about us"
   							onChange={handleChange}
   							onBlur={handleBlur}
   							value={values.howDidYouHear}
   							sx={formStyles.formInput}
   						/>
   					</FormControl>
   				</Grid>

   				{/* Products Section */}
   				<Grid size={{ xs: 12 }}>
   					<Typography sx={formStyles.compliancesLabel}>Which product(s) are you interested in?</Typography>
   					<Grid container spacing={0.5}>
   						{productOptions.map((product, index) => (
   							<Grid size={{ xs: 12 }} key={index}>
   								<FormControlLabel
   									control={
   										<Checkbox
   											checked={selectedProducts.includes(product)}
   											onChange={() => toggleProduct(product)}
   											sx={formStyles.checkbox}
   										/>
   									}
   									label={product}
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

   				{/* Privacy Notice */}
   				<Grid size={{ xs: 12 }}>
   					<Typography sx={formStyles.secondaryText}>
   						By submitting this form I agree to receive communications (including emails) from ComplianceHub. See our{' '}
   						<a href="/privacy" target="_blank" rel="noopener noreferrer">
   							Privacy Notice
   						</a>{' '}
   						for more info.
   					</Typography>
   				</Grid>
   			</Grid>
   		</form>
   	</Box>
   );
};

export default ProductDemoForm;