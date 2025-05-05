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
import theme from '../../../../theme';

interface CcpaHeroSectionFormProps extends FormikProps<FormValues> {}

const CcpaHeroSectionForm: React.FC<CcpaHeroSectionFormProps> = ({
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
  //   if (!isChecked) {
  //     setAlert({ type: 'error', message: 'You must agree to the terms before submitting.' });
  //     return;
  //   }
  //   if (values.fullName && !errors.fullName && values.email && !errors.email) {
  //     setLoading(true);
  //     const sheetName = sheetNameTypes.ccpaForm;
  //     const data = [values.fullName, values.email, getCurrentTime()];
  //     try {
  //       await addDataToGoogleSheetRequest(sheetName, data);
  //       setAlert({ type: 'success', message: 'Your response has been saved.' });
  //       resetForm();
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
          <Grid size={{ xs: 12 }} sx={ccpaHeroSectionStyles.gridItem}>
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

          <Grid size={{ xs: 12 }} sx={ccpaHeroSectionStyles.gridItem}>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  color="primary"
                  sx={ccpaHeroSectionStyles.checkbox}
                />
              }
              label={<Typography sx={{ color: theme.palette.text.primary }}>I agree to the terms and conditions.</Typography>}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography sx={ccpaHeroSectionStyles.secondaryText}>
              By clicking submit below, you consent to allow Hexafort to store and process the Personal Data submitted by you above as per our{' '}
              <a href="/privacy-policy" target="_blank" style={{ color: '#115e59' }}>
                Privacy Policy
              </a>.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={ccpaHeroSectionStyles.button}
              // onClick={handleClick}
              disabled={loading || !isChecked}
              disableElevation
            >
              {loading ? 'Submitting...' : 'Request Demo'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CcpaHeroSectionForm;