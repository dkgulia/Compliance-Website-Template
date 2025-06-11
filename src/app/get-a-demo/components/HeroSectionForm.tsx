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
   Button,
} from '@mui/material';
import heroSectionStyles from '../styles/heroSectionStyle';
import { complianceOptionsArray } from '../../constants/complianceData';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedHeroSectionForm';
import { addDataToGoogleSheetRequest } from '../../../api/googleSheetRequest';
import { getCurrentTime } from '../../../utils/getCurrentTime';
import { sheetNameTypes } from '../../constants/sheetTypes';

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
   const [submitted, setSubmitted] = useState(false);

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

   const handleClick = async () => {
      if (selectedOptions.length === 0) {
         setAlert({ type: 'error', message: 'Please select at least one compliance.' });
         return;
      }

      if (values.fullName && !errors.fullName &&
          values.email && !errors.email) {
         setLoading(true);
         const data = [
            values.fullName,
            values.email,
            getCurrentTime(),
            selectedOptions.join(', ')
         ];
         try {
            await addDataToGoogleSheetRequest(sheetNameTypes.bookDemo, data);
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

   // Determine button text based on loading and submitted states
   const getButtonText = () => {
      if (loading) return 'Submitting...';
      if (submitted) return 'Request Sent';
      return 'Book Your Demo';
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
                     fullWidth
                     variant="contained"
   						sx={heroSectionStyles.button}
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

export default HeroSectionForm;