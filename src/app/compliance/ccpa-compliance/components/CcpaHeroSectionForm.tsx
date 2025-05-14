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
import ccpaHeroSectionStyles from '../styles/heroSectionStyle';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedCcpaHeroSectionForm';
// import { addDataToGoogleSheetRequest } from '../../../../api/googleSheetRequest';
// import { sheetNameTypes } from '../../../../constants/interfaces';
// import { getCurrentTime } from '../../../../utils/getCurrentTime';
import { complianceOptionsArray } from '../../../constants/complianceData';

interface CcpaHeroSectionFormProps extends FormikProps<FormValues> {
  selectedOptions: string[];
  onOptionsChange: (options: string[]) => void;
  onSubmitCallback?: (values: FormValues) => void;
}

const CcpaHeroSectionForm: React.FC<CcpaHeroSectionFormProps> = ({
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
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleOption = (option: string) => {
    onOptionsChange(
      selectedOptions.includes(option)
        ? selectedOptions.filter((selected) => selected !== option)
        : [...selectedOptions, option]
    );
  };

  // const handleClick = async () => {
  //   if (selectedOptions.length === 0) {
  //     setAlert({ type: 'error', message: 'Please select at least one compliance.' });
  //     return;
  //   }

  //   if (values.fullName && !errors.fullName && values.email && !errors.email) {
  //     setLoading(true);
  //     const sheetName = sheetNameTypes.ccpaForm;
  //     const data = [values.fullName, values.email, getCurrentTime(), selectedOptions.join(', ')];
  //     try {
  //       await addDataToGoogleSheetRequest(sheetName, data);
  //       setAlert({ type: 'success', message: 'Your response has been saved.' });
  //       resetForm();
  //       onOptionsChange([]);
  //     } catch (err: any) {
  //       let errorMessage = 'Network Error';
  //       if (err.response?.data?.message) {
  //         errorMessage = err.response.data.message;
  //       }
  //       setAlert({ type: 'error', message: errorMessage });
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  const handleSnackbarClose = () => {
    setAlert(null);
  };

  return (
    <Box sx={ccpaHeroSectionStyles.formContainer}>
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
            <Typography variant="h4" sx={ccpaHeroSectionStyles.formHeading}>
              Book Your Demo Today!
            </Typography>
            <Typography sx={{ marginBottom: '1rem', color: 'text.primary' }}>
              Get answers to all your questions.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
              <Typography sx={ccpaHeroSectionStyles.formLabel}>Full Name</Typography>
              <OutlinedInput
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                sx={ccpaHeroSectionStyles.formInput}
              />
              <FormHelperText sx={ccpaHeroSectionStyles.formHelperText}>
                {touched.fullName && errors.fullName}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.email && Boolean(errors.email)}>
              <Typography sx={ccpaHeroSectionStyles.formLabel}>Work Email</Typography>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                sx={ccpaHeroSectionStyles.formInput}
              />
              <FormHelperText sx={ccpaHeroSectionStyles.formHelperText}>
                {touched.email && errors.email}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography sx={ccpaHeroSectionStyles.compliancesLabel}>Compliances Interested In*</Typography>
            <Grid container spacing={1}>
              {complianceOptionsArray.map((option, index) => (
                <Grid size={{ xs: 6, sm: 4 }} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.includes(option)}
                        onChange={() => toggleOption(option)}
                        sx={ccpaHeroSectionStyles.checkbox}
                      />
                    }
                    label={option}
                    sx={ccpaHeroSectionStyles.checkboxLabel}
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
              sx={ccpaHeroSectionStyles.button}
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

export default CcpaHeroSectionForm;