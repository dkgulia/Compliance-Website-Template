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
import soc2HeroSectionStyles from '../styles/HeroSectionStyles';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedHeroSectionForm';
import { complianceOptionsArray } from '../../../constants/complianceData';
// import { addDataToGoogleSheetRequest } from '../../../../api/googleSheetRequest';
// import { sheetNameTypes } from '../../../../constants/interfaces';
// import { getCurrentTime } from '../../../../utils/getCurrentTime';

interface Soc2HeroSectionFormProps extends FormikProps<FormValues> {
  selectedOptions: string[];
  onOptionsChange: (options: string[]) => void;
}

const Soc2HeroSectionForm: React.FC<Soc2HeroSectionFormProps> = ({
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
  //   if (values.fullName && !errors.fullName && values.email && !errors.email) {
  //     if (selectedOptions.length === 0) {
  //       setAlert({ type: 'error', message: 'Please select at least one compliance.' });
  //       return;
  //     }
  //     setLoading(true);
  //     const sheetName = sheetNameTypes.soc2Form;
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
    <Box sx={soc2HeroSectionStyles.formContainer}>
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
            <Typography variant="h4" sx={soc2HeroSectionStyles.formHeading}>
              Book Your Demo Today!
            </Typography>
            <Typography sx={{ marginBottom: '1rem', color: 'white' }}>Get answers to all your questions.</Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
              <Typography sx={soc2HeroSectionStyles.compliancesLabel}>Full Name</Typography>
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
              <Typography sx={soc2HeroSectionStyles.compliancesLabel}>Work Email</Typography>
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
            <Typography sx={soc2HeroSectionStyles.compliancesLabel}>Compliances Interested In*</Typography>
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
                    sx={soc2HeroSectionStyles.checkboxLabel}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={soc2HeroSectionStyles.button}
              // onClick={handleClick}
              disabled={loading || selectedOptions.length === 0}
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

export default Soc2HeroSectionForm;