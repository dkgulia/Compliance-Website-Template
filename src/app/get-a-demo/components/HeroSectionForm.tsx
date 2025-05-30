import React, { useState } from 'react';
import {
   Grid,
   Box,
   FormControl,
   OutlinedInput,
   FormHelperText,
   Typography,
   FormControlLabel,
   Checkbox,
   Snackbar,
   Alert,
} from '@mui/material';
import Button from '../../Button/HexaFortButton';
import heroSectionStyles from '../styles/heroSectionStyle';
import { complianceOptionsArray } from '../../constants/complianceData';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedHeroSectionForm';

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

   const handleSnackbarClose = () => {
   	setAlert(null);
   };

   return (
   	<Box sx={heroSectionStyles.formContainer}>
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
   					<Typography sx={heroSectionStyles.formHeading}>
   						Book Your Demo Today!
   					</Typography>
   					<Typography sx={heroSectionStyles.subtitle}>
   						Get answers to all your questions.
   					</Typography>
   				</Grid>

   				<Grid size={{ xs: 12 }}>
   					<FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
   						<Typography sx={heroSectionStyles.compliancesLabel}>Full Name</Typography>
   						<OutlinedInput
   							id="fullName"
   							name="fullName"
   							placeholder="Enter your full name"
   							onChange={handleChange}
   							onBlur={handleBlur}
   							value={values.fullName}
   							sx={heroSectionStyles.input}
   						/>
   						<FormHelperText>{touched.fullName && errors.fullName}</FormHelperText>
   					</FormControl>
   				</Grid>

   				<Grid size={{ xs: 12 }}>
   					<FormControl fullWidth error={touched.email && Boolean(errors.email)}>
   						<Typography sx={heroSectionStyles.compliancesLabel}>Work Email</Typography>
   						<OutlinedInput
   							id="email"
   							name="email"
   							placeholder="Enter your email"
   							onChange={handleChange}
   							onBlur={handleBlur}
   							value={values.email}
   							sx={heroSectionStyles.input}
   						/>
   						<FormHelperText>{touched.email && errors.email}</FormHelperText>
   					</FormControl>
   				</Grid>

   				<Grid size={{ xs: 12 }}>
   					<Typography sx={heroSectionStyles.compliancesLabel}>Compliances Interested In*</Typography>
   					<Grid container spacing={1}>
   						{complianceOptionsArray.map((option, index) => (
   							<Grid size={{ xs: 6, sm: 4 }} key={index}>
   								<FormControlLabel
   									control={
   										<Checkbox
   											checked={selectedOptions.includes(option)}
   											onChange={() => toggleOption(option)}
   										/>
   									}
   									label={option}
   									sx={heroSectionStyles.checkboxLabel}
   								/>
   							</Grid>
   						))}
   					</Grid>
   				</Grid>

   				<Grid size={{ xs: 12 }}>
   					<Button
   						
   						type="button"
   						sx={heroSectionStyles.button}
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

export default HeroSectionForm;